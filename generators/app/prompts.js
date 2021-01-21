module.exports = [
    {
      type: 'input',
      name: 'projectName',
      message: '请输入你的项目名称',
      default: 'myApp'
    },
    {
      type: 'list',
      name: 'projectType',
      message: '请选择你希望创建的项目类型？',
      choices: [{
        name: 'spa（单页应用）',
        value: 'spa',
        short: 'spa（单页应用）'
      }, {
        name: 'mpa（多页应用）',
        value: 'mpa',
        short: 'mpa（多页应用）'
      }]
    }
]