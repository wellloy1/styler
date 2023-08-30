function validateOptions(options, optionsValidators) {
  let message = '';
  let count = 0;
  for (const option in options) {
    if (!Object.prototype.hasOwnProperty.call(optionsValidators, option)) {
      count++;
      message += `${count}) '${option}' does not exist\n`;
    } else {
      const args = options[option];
      const result = optionsValidators[option](args);
      if (result !== '') {
        count++;
        message += `${count}) ${result}\n`;
      }
    }
  }

  return message;
}

module.exports = validateOptions;
