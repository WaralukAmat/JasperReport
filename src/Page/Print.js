import React from "react";
import axios from "axios";

export default function PrintPage() {
  const printReport = async () => {
    try {
      let allPage = [];
      for (let i = 1; i <= totalPages; i++) {
        const response = await axios.get(
          "http://localhost:8080/jasperserver/rest_v2/reports/reports/medicalcer.pdf",
          {
            params: {
              j_username: "jasperadmin",
              j_password: "jasperadmin"
            },
          }
        );
        allPage.push(response.data);
      }
      document.body.innerHTML = allPage; 
      window.print();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <button
      className="button-14 px-2 m-2 font-bold rounded-full"
      onClick={printReport}
    >
      Print
    </button>
    </>
  );
}
