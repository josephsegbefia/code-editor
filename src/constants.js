export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  // html: "5.0.0"
};


export const CODE_SNIPPETS = {
  javascript: `// Sample code.Replace with your code\n\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `// Sample code.Replace with your code\n\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `# Sample code.Replace with your code\n\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `// Sample code.Replace with your code\n\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    '// Sample code.Replace with your code\nusing System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n// Sample code.Replace with your code\n\n$name = 'Alex';\necho $name;\n",
  // html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>Your Title Here</title>\n\t<!-- Add any additional meta tags, stylesheets, or scripts here -->\n</head>\n<body>\n\t<!-- Your content goes here -->\n\n\t<!-- Example content -->\n\t<h1>Hello, World!</h1>\n\t<!-- End of example content -->\n\n\t<!-- Add any scripts at the end of the body for better performance -->\n</body>\n</html>\n`,
};
