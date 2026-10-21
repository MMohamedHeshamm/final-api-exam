# Quiz System | Final API Assessment

A browser-based technical assessment project designed to evaluate knowledge of **ASP.NET Core Web API development**, including API architecture, Entity Framework Core, dependency injection, repository patterns, controller logic, and debugging.

The repository provides a GitHub Pages entry point for a hosted examination and includes a JavaScript quiz engine demonstrating assessment workflows, scoring, session management, and reporting.

> **Implementation note:** The current `index.html` redirects to a Google Apps Script examination. The included `script.js` and `style.css` are not currently loaded by that landing page.

## Live Demo

**[Launch the Assessment](https://mmohamedheshamm.github.io/Quiz-System/)**

## Assessment Topics

The included question bank covers:

- ASP.NET Core Web API architecture
- Entity Framework Core and SQL Server
- Dependency Injection and service lifetimes
- Repository Pattern and data access
- Controllers, DTOs, and entity relationships
- C# debugging and exception prevention

## Key Features

The included JavaScript quiz implementation provides:

- **Interactive Assessments:** Multiple-choice, true/false, and debugging questions.
- **Student Registration:** Student identification before starting an examination.
- **Question Navigation:** Navigate between questions and review previous answers.
- **Automated Scoring:** Calculate scores and percentages upon submission.
- **Progress Tracking:** Monitor completed and unanswered questions.
- **Session Persistence:** Save assessment progress using browser local storage.
- **Exam Monitoring:** Detect browser focus changes and apply warning rules.
- **Result Reporting:** Attempt to send assessment information to a Google Apps Script endpoint.
- **Data Export:** Download XLSX results when supported, with a CSV fallback.
- **Results Summary:** View scores, submission timestamps, and examination status.

These features describe the included JavaScript engine; the externally hosted examination may operate differently.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Interface styling |
| JavaScript | Interactive examination logic |
| Local Storage | Browser-based session persistence |
| Google Apps Script | Hosted exam and reporting integration |
| GitHub Pages | Static hosting and redirect |
| SheetJS (optional) | Excel result exports |

**Note:** ASP.NET Core and Entity Framework Core are subjects covered by the assessment, not technologies used to implement this repository's frontend.

## Project Structure

```text
Quiz-System/
├── index.html
├── script.js
└── style.css
```

### File Responsibilities

- `index.html` — GitHub Pages entry point that redirects to the hosted examination.
- `script.js` — JavaScript assessment engine, question bank, navigation, scoring, and reporting logic.
- `style.css` — Styles for the included assessment interface.

The current entry point does not load the standalone JavaScript assessment engine.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MMohamedHeshamm/Quiz-System.git
```

### 2. Navigate to the Project

```bash
cd Quiz-System
```

### 3. Run the Landing Page Locally

With Python 3 installed:

```bash
python -m http.server 8000
```

Open:

`http://localhost:8000`

The landing page redirects to the configured Google Apps Script examination.

### Configuration

- Update `EXAM_URL` inside `index.html` to configure the hosted examination destination.
- Update `WEBHOOK_URL` inside `script.js` to configure reporting for the included JavaScript engine.
- To use the JavaScript engine directly, provide an HTML interface that loads its CSS and JavaScript files and includes the expected application containers.

## Architecture Overview

```text
                 Student
                    |
                    v
             GitHub Pages
                    |
                    v
        Google Apps Script Exam


    Included JavaScript Implementation
                    |
          Question Navigation
                    |
          Local Session Storage
                    |
          Automated Evaluation
                    |
             Result Summary
                    |
         Reporting / CSV / XLSX
```

## Engineering Highlights

The included implementation demonstrates practical frontend engineering concepts:

- Event-driven UI interactions and state management
- Browser session persistence and recovery
- Dynamic question rendering
- Answer validation and automated evaluation
- Client-side export generation
- Integration with external reporting services
- Browser visibility and focus event handling

## Security and Limitations

This project is intended as an educational assessment implementation.

- The JavaScript question bank and answer keys are visible in the public source.
- Client-side scoring should not be considered tamper-resistant.
- Browser focus monitoring is not equivalent to secure exam proctoring.
- External report delivery should be verified in the receiving spreadsheet.
- The hosted Google Apps Script application's source code is not included in this repository.

For production examination systems, server-side answer validation, authentication, and reliable submission acknowledgments would be recommended.

## Future Enhancements

- Server-side question storage and answer validation
- Administrator dashboard for managing assessments
- Role-based authentication and authorization
- Centralized student performance analytics
- Verified result submission and receipt tracking
- Automated testing and improved documentation
- Unified deployment of the quiz engine and hosted examination

## Author

**Mohamed H. Eldesouky**

Backend Engineer | .NET Developer

- **GitHub:** [MMohamedHeshamm](https://github.com/MMohamedHeshamm)
- **LinkedIn:** [Mohamed H. Eldesouky](https://www.linkedin.com/in/mohamedhhh/)

---

**Quiz System** — An educational technical assessment project demonstrating interactive examination workflows and evaluation of practical .NET backend development knowledge.
