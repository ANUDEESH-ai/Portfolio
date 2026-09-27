import fs from 'fs';
import path from 'path';

// Generate a valid minimal PDF file containing Anudeesh Paidi's resume details
const content = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length 720
>>
stream
BT
/F2 20 Tf
50 740 Td
(ANUDEESH PAIDI) Tj
/F1 10 Tf
0 -18 Td
(Computer Science Engineering Student | AI & Software Developer) Tj
0 -14 Td
(Kokapet, Hyderabad | paidianudeesh8@gmail.com) Tj

0 -30 Td
/F2 14 Tf
(EDUCATION) Tj
/F1 10 Tf
0 -16 Td
(Chaitanya Bharathi Institute of Technology, Hyderabad (2024 - 2028)) Tj
0 -12 Td
(Bachelor of Engineering in Computer Science Engineering | CGPA: 9.35) Tj
0 -16 Td
(Alphores Junior College (2022 - 2024)) Tj
0 -12 Td
(Intermediate | Marks: 987/1000) Tj

0 -30 Td
/F2 14 Tf
(FEATURED PROJECTS) Tj
/F1 10 Tf
0 -16 Td
(1. Urban Mobile Sensing Edge-AI Platform [SIH Prototype]) Tj
0 -12 Td
(Edge-AI onboard processing for transit buses with YOLOv8 & GIS analytics) Tj
0 -16 Td
(2. AI Voice Assistant Web Application) Tj
0 -12 Td
(Voice-controlled assistant using Web Speech API, NLP, and async services) Tj

0 -30 Td
/F2 14 Tf
(EXPERIENCE & CERTIFICATIONS) Tj
/F1 10 Tf
0 -16 Td
(Web Development & Designing Intern - AICTE Oasis Infobyte (March-April 2026)) Tj
0 -14 Td
(Python Certification - NPTEL | Data Science Certification - Springboard) Tj
ET
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000001037 00000 n 
0000001108 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1184
%%EOF`;

const targetPath = path.resolve('public', 'Anudeesh_Paidi_Resume.pdf');
fs.writeFileSync(targetPath, content.trim());
console.log('Resume PDF generated at', targetPath);
