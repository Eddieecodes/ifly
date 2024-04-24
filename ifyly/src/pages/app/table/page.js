// // pages/app/table/page.js

// import { useState, useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   "https://ulqcojuknislllphvwmn.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscWNvanVrbmlzbGxscGh2d21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNjI4NDIsImV4cCI6MjAyODkzODg0Mn0.VORBWxBZ0Q0N_qi4Pn4woc7OLn9Z8vK3vI4mcqSRj4k"
// );

// async function insertData() {
//   try {
//     const { data, error } = await supabase.from("info").insert([
//       {
//         id: "13456432",
//         created_at: new Date(),
//         views: 0,
//         original_url: "https://example.com",
//         shortened_url: "https://short.example.com",
//       },
//     ]);
//     if (error) {
//       throw error;
//     }
//     console.log("Data inserted successfully:", data);
//   } catch (error) {
//     console.error("Error inserting data:", error.message);
//   }
// }

// // Call the function to insert data
// insertData();

// export default function infosPage() {
//   const [infos, setInfos] = useState([]);

//   useEffect(() => {
//     async function fetchInfos() {
//       try {
//         const { data, error } = await supabase.from("Info").select("*");
//         if (error) {
//           throw error;
//         }
//         setInfos(data || []);
//       } catch (error) {
//         console.error("Error fetching infos:", error.message);
//       }
//     }
//     fetchInfos();
//   }, []);

//   return (
//     <div>
//       <h1>Infos</h1>
//       <ul>
//         {infos.map((info) => (
//           <li key={info.id}>{info.shortened_url}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// pages/app/table/page.js

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ulqcojuknislllphvwmn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscWNvanVrbmlzbGxscGh2d21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNjI4NDIsImV4cCI6MjAyODkzODg0Mn0.VORBWxBZ0Q0N_qi4Pn4woc7OLn9Z8vK3vI4mcqSRj4k"
);

async function insertData() {
  try {
    const { data, error } = await supabase.from("info").insert([
      {
        id: "13456432",
        created_at: new Date(),
        views: 0,
        original_url: "https://example.com",
        shortened_url: "https://short.example.com",
      },
    ]);
    if (error) {
      throw error;
    }
    console.log("Data inserted successfully:", data);
  } catch (error) {
    console.error("Error inserting data:", error.message);
  }
}

// Call the function to insert data
insertData();

export default function InfosPage() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function fetchInfos() {
      try {
        const { data, error } = await supabase.from("info").select("*");
        if (error) {
          throw error;
        }
        setInfos(data || []);
      } catch (error) {
        console.error("Error fetching infos:", error.message);
      }
    }
    fetchInfos();
  }, []);

  return (
    <div>
      <h1>Infos</h1>
      <ul>
        {infos.map((info) => (
          <li key={info.id}>{info.shortened_url}</li>
        ))}
      </ul>
    </div>
  );
}
