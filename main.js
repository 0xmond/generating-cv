const Handlebars = require('handlebars');
const fs = require('fs');
const pdf = require('html-pdf'); // To generate PDF

// Load HTML template
const templateHtml = fs.readFileSync('temp.html', 'utf8');
const template = Handlebars.compile(templateHtml);

// User data
const userData = {
    name: "Mostafa Mahmoud",
    jobTitle: "Junior Backend Engineer",
    email: "mostafa@example.com",
    phone: "123-456-7890",
    skills: ["JavaScript", "Node.js", "ASP.NET Core Web API"],
    experiences: [
        { title: "Jr Backend Developer", company: "TechCorp", date: "2021-2023", description: "Developed web applications." }
    ]
};

// Generate HTML with data
const finalHtml = template(userData);

// Convert HTML to PDF
pdf.create(finalHtml).toFile('./output_cv.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/output_cv.pdf' }
});
