poorModule("blocks-vm", function () {
  var makeBlocks = function () {
    blocks = { };
    blocks.pc = 0;
    blocks.instructions = {
      say: function (arg) { console.log(arg) } 
    }
    var eval = function (command) {
      var fn = command[0];
      var args = command.slice(1);
      var instruction = blocks.instructions[fn]
      if (instruction) {
        instruction.apply(null, args)
      }
    }
    blocks.runCode = function (code) {
      commands = code.split("\n") 
      for (var i=0; i < commands.length; i++) {
        commands[i] = commands[i].split(" ") 
      }
      while (true) {
        var command = commands[blocks.pc];
        if (!command) break;
        eval(command);
        blocks.pc += 1
      }
    }
    return blocks;
  }
  var blocks = makeBlocks()
  blocks.clone = makeBlocks
  return blocks
})
