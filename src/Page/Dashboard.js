import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function Dashboard() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/jasperserver/rest_v2/reports/reports/medicalcer.html",
        {
          params: 
          {
            j_username: "jasperadmin",
            j_password: "jasperadmin",
          },
        }
      );
      const data = response.data;
      const parsedContent = parse(data);
      setReport(parsedContent); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="printable">
        {report}
      </div>
    </div>
  );
}
