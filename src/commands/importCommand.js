const Logger = require('../utils/logger');
const fs = require('fs');
const path = require('path');

class ImportCommand {
  constructor(manager) {
    this.manager = manager;
  }

  execute(filepath) {
    if (!filepath) {
      Logger.error('Please provide a file path');
      return;
    }

    try {
      if (!fs.existsSync(filepath)) {
        Logger.error(`File not found: ${filepath}`);
        return;
      }

      const content = fs.readFileSync(filepath, 'utf8');
      const tasks = JSON.parse(content);

      if (!Array.isArray(tasks)) {
        Logger.error('Invalid file format. Expected JSON array');
        return;
      }

      tasks.forEach(task => this.manager.addTask(task.text, task.category, task.priority));
      Logger.success(`Successfully imported ${tasks.length} tasks`);
    } catch (error) {
      Logger.error(`Import failed: ${error.message}`);
    }
  }
}

module.exports = ImportCommand;