      function buildDonut() {
        const donut = document.getElementById("donut");
        const rows = document.querySelectorAll("#breakdown .break-row");

        let start = 0;
        const parts = [];

        rows.forEach((row) => {
          const percent = Number(row.dataset.percent || 0);
          const color = row.dataset.color || "#B9FF5A";

          const end = start + percent;

          // ✅ create donut segment
          parts.push(`${color} ${start}% ${end}%`);

          // ✅ apply same color to percent tag
          const pill = row.querySelector(".tag-percent");
          if (pill) pill.style.background = color;

          start = end;
        });

        // ✅ remaining space (if total < 100)
        if (start < 100) {
          parts.push(`rgba(185,255,90,0.10) ${start}% 100%`);
        }

        donut.style.background = `conic-gradient(${parts.join(", ")})`;
      }

      buildDonut();