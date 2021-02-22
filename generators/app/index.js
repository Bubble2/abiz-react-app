const Generator = require('yeoman-generator');
const prompts = require('./prompts');
const prompts2 = require('./prompts2');

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
            const answers2 =  await this.prompt(prompts2);
            if(!answers2.redux){
                this.tmpDir = './spa-without-redux';
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