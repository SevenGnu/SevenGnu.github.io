from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Julian_Grossman_Resume_2026_Updated.pdf"
BLUE = colors.HexColor("#224B7A")
INK = colors.HexColor("#171A1F")
MUTED = colors.HexColor("#4E5661")
RULE = colors.HexColor("#C9D1DA")

styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=23,
    leading=24,
    textColor=BLUE,
    alignment=TA_CENTER,
    spaceAfter=2,
)
tagline_style = ParagraphStyle(
    "Tagline",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.7,
    leading=10.5,
    textColor=MUTED,
    alignment=TA_CENTER,
    tracking=0.7,
    spaceAfter=2,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.55,
    leading=10.5,
    textColor=INK,
    alignment=TA_CENTER,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.1,
    leading=12,
    textColor=BLUE,
    spaceBefore=7,
    spaceAfter=3.4,
    borderWidth=0,
    textTransform="uppercase",
    tracking=0.7,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.95,
    leading=11.25,
    textColor=INK,
    spaceAfter=1.8,
)
meta_style = ParagraphStyle(
    "Meta",
    parent=body_style,
    fontName="Helvetica-Oblique",
    textColor=MUTED,
    spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=10,
    firstLineIndent=-7,
    bulletIndent=0,
    spaceAfter=1.7,
)
skill_label_style = ParagraphStyle(
    "SkillLabel",
    parent=body_style,
    fontName="Helvetica-Bold",
    textColor=INK,
)


def section(title):
    return [
        Paragraph(title, section_style),
        Table([[""]], colWidths=[7.55 * inch], rowHeights=[0.35]),
        Spacer(1, 2.5),
    ]


def role(title, meta, bullets):
    content = [
        Paragraph(title, body_style),
        Paragraph(meta, meta_style),
    ]
    content.extend(Paragraph(item, bullet_style, bulletText="•") for item in bullets)
    return KeepTogether(content)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.43 * inch,
        rightMargin=0.43 * inch,
        topMargin=0.32 * inch,
        bottomMargin=0.30 * inch,
        title="Julian Grossman Resume 2026",
        author="Julian Grossman",
        subject="AI Engineering and Computational Data Science Resume",
    )

    story = [
        Paragraph("Julian R. Grossman", name_style),
        Paragraph("AI ENGINEERING  •  DATA SCIENCE  •  ENTERPRISE AUTOMATION", tagline_style),
        Paragraph(
            '<link href="mailto:julianrgrossman@gmail.com" color="#171A1F">julianrgrossman@gmail.com</link>'
            '  |  +1 (610) 715-3333  |  Havertown, PA  |  '
            '<link href="https://www.linkedin.com/in/julian-grossman-1b24052b8" color="#224B7A">linkedin.com/in/julian-grossman-1b24052b8</link>',
            contact_style,
        ),
        Spacer(1, 2),
    ]

    story.extend(section("Education"))
    story.append(
        Paragraph(
            "<b>Pennsylvania State University</b> - B.S. Computational Data Science"
            "  |  Expected May 2027  |  Cumulative GPA: 3.0",
            body_style,
        )
    )
    story.append(
        Paragraph(
            "<b>Relevant coursework:</b> Artificial Intelligence, Data Structures &amp; Algorithms, Data Science I-IV, "
            "Statistical Reasoning, Computer Science I-IV, Statistics in R, Calculus I-III, Discrete Math, Matrices, Data Ethics",
            body_style,
        )
    )

    story.extend(section("Technical Skills"))
    skill_rows = [
        ("Languages &amp; frameworks", "Python, C#, .NET Framework, SQL"),
        ("AI &amp; automation", "LLMs, Ollama, n8n, Model Context Protocol (MCP), OCR, Vision-Language Models"),
        ("Cloud &amp; DevOps", "Azure DevOps, Microsoft Azure, Azure Key Vault, Kubernetes, Docker, CI/CD"),
        ("Data &amp; integrations", "Snowflake, SQL Server, Redis, Microsoft Graph, REST APIs, Pandas, RapidFuzz"),
    ]
    skills_table = Table(
        [[Paragraph(f"<b>{label}:</b>", body_style), Paragraph(value, body_style)] for label, value in skill_rows],
        colWidths=[1.28 * inch, 6.20 * inch],
        hAlign="LEFT",
    )
    skills_table.setStyle(
        TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 3),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0.6),
        ])
    )
    story.append(skills_table)

    story.extend(section("Internship Experience"))
    story.append(
        role(
            "<b>Pennsylvania Compensation Rating Bureau (PCRB) - AI Engineer Intern</b>",
            "Summer 2026  |  Philadelphia, PA",
            [
                "Engineered an AI-powered Azure DevOps governance and reporting platform in Python using locally hosted LLMs; analyzed work items, releases, deployments, commits, and pull requests to produce business summaries, workflow insights, and deployment-risk reports.",
                "Deployed privacy-preserving, on-premise inference with Ollama, Docker, Kubernetes, and Redis, including multi-replica model serving, request distribution, and concurrency controls that kept company data off external AI services.",
                "Integrated C#, .NET Framework, Azure Key Vault, Microsoft Graph, and Azure DevOps REST APIs/WIQL with certificate-based authentication and configuration-driven secret retrieval for secure enterprise automation.",
                "Built software-delivery and ticket-lifecycle compliance analytics that detected skipped states, reopened tickets, missing artifacts, approval and sign-off gaps, rollback signals, and recurring failure patterns; linked AI-generated explanations to engineering evidence.",
                "Designed an agentic payroll-audit and document-processing workflow using n8n, MCP, OCR, and VLMs, with PII redaction/restoration, human-in-the-loop review, and feedback routing between specialized local agents and internal systems.",
            ],
        )
    )
    story.append(Spacer(1, 2.5))
    story.append(
        role(
            "<b>Pennsylvania Compensation Rating Bureau (PCRB) - Data Science / Actuarial Research Intern</b>",
            "Summer 2025  |  Philadelphia, PA",
            [
                "Improved address and branch matching accuracy by 4% with scalable Python pipelines using Pandas, RapidFuzz, and regex for standardization and fuzzy matching across millions of records.",
                "Built traceable validation and anomaly-detection workflows; queried, validated, and transformed large datasets using Snowflake, SQL Server, and SQL.",
                "Proposed spatial reconciliation, REST API validation, and Microsoft Azure automation approaches to improve long-term data quality; several recommendations moved into implementation.",
            ],
        )
    )

    story.extend(section("Activities"))
    activities = [
        "<b>Ri3D Club:</b> Built a functional robot in 72 hours for the annual FIRST Robotics challenge.",
        "<b>Nittany AI Society:</b> Participate in AI workshops, hackathons, and applied machine-learning activities.",
        "<b>Nittany Cloud Association:</b> Gain hands-on exposure to Azure, AWS, and Google Cloud platforms.",
    ]
    story.extend(Paragraph(item, bullet_style, bulletText="•") for item in activities)

    def on_page(canvas, _doc):
        canvas.saveState()
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.45)
        canvas.line(0.43 * inch, 0.24 * inch, 8.07 * inch, 0.24 * inch)
        canvas.restoreState()

    doc.build(story, onFirstPage=on_page)
    print(OUTPUT)


if __name__ == "__main__":
    build()
