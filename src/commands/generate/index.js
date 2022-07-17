const program = require("commander");
const generateUtil = require("./generate");
program
  .command("generate")
  .alias("g")
  .option("-t, --template [template]","SAM template file").preset("template.yaml")
  .description("Generates CloudWatch alarms for template resources")
  .action(async (cmd) => {
    await generateUtil.run(cmd);
  });
