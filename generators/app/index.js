const Generator = require('yeoman-generator');
const prompts = require('./prompts');
const promptsRedux = require('./prompts-redux');
const promptsServer = require('./prompts-server');

// 单页、多页
// 是否支持redux
//

module.exports = class extends Generator{
    constructor(args, opts){
        super(args, opts);
        this.tmpDir = './spa';
    }

    async prompting(){
        const answers =  await this.prompt(prompts);

        // Set needed global vars for yo
        this.projectName = answers.projectName;
        this.log(this.projectName.replace(/\s+/g, '-') + ' is getting generated..!');
        // Set needed keys into config
        this.config.set('projectName', this.projectName);

        this.tmpDir = './' + answers.projectType;

        if(answers.projectType=== 'spa'){
            const answersServer =  await this.prompt(promptsServer);
            
            if(answersServer.server){
                this.tmpDir = './spa-server';
            }else{
                const answersRedux =  await this.prompt(promptsRedux);
                if(!answersRedux.redux){
                    this.tmpDir = './spa-without-redux';
                }
            }
            
        }
    }

    writing(){
        
        this.fs.copy(
            this.templatePath(this.tmpDir + '/'),
            this.destinationPath(this.destinationRoot()),
            { globOptions: { dot: true } }
        );

        this.fs.copyTpl(
            this.templatePath(this.tmpDir + '/package.json'),
            this.destinationPath('package.json'),
            {
                projectName: this.projectName.replace(/\s+/g, '-')
            }
        );
      
        this.fs.copy(
            this.templatePath(this.tmpDir + '/_gitignore'),
            this.destinationPath('.gitignore')
        );
      
        this.removeFiles();

    }

    removeFiles() {
        // this.fs.delete(this.destinationRoot() + '/_package.json');
        this.fs.delete(this.destinationRoot() + '/_gitignore');
      }

    install(){
        this.npmInstall();
    }
}