import chalk from "chalk" ;
console.log(chalk.blue('Hello world!'));
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline('with a blue substring') +
	' that becomes green again!'
));
console.log(chalk.bold('Goodbye')+" World");
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));