import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function Dashboard() {
  const [report, setReport] = useState(null);

  // useEffect(() => {
  //   fetchReport();
  // }, []);
  document.addEventListener("DOMContentLoaded", function() {
    const fetchReport = async () => {
      try {
        const response = await axios.get(
          "http://www.thapra.lib.su.ac.th/m-talk/attachments/article/75/ebook.pdf",
          {
            responseType: 'arraybuffer'
          }
        );
        const pdfData = response.data;
        // Load PDF document
        const loadingTask = pdfjsLib.getDocument({ data: pdfData });
        loadingTask.promise.then(pdf => {
          // Fetch the first page
          pdf.getPage(1).then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
            const canvas = document.getElementById('pdfCanvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
  
            // Render PDF page into canvas context
            const renderContext = {
              canvasContext: context,
              viewport: viewport
            };
            page.render(renderContext);
          });
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchReport(); // Call the function once the DOM is fully loaded
  });
  
  
  
  return (
    <div>
      <div className="printable">
        {/* {report} */}
      </div>
    </div>
  );
}
