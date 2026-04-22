const Logger = require('../utils/logger');
const chalk = require('chalk');

class ListCommand {
  constructor(manager) {
    this.manager = manager;
  }

  execute() {
    const tasks = this.manager.getTasks();
    
    if (tasks.length === 0) {
      Logger.warning('No tasks available');
      return;
    }

    console.log(chalk.cyan.bold('\n📋 Your Tasks:\n'));
    
    tasks.forEach((task, index) => {
      const status = task.completed ? chalk.green('✓') : chalk.red('✗');
      const text = task.completed ? chalk.strikethrough(task.text) : task.text;
      console.log(`  ${index + 1}. [${status}] ${text}`);
    });
    
    console.log();
  }
}

module.exports = ListCommand;