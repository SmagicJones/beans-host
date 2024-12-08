import { useState } from "react";

export default function Tab() {
  const [selection, setSelection] = useState("summary");

  function renderSelection() {
    switch (selection) {
      case "summary":
        return (
          <>
            <div className="p-4">
              <h3 className="text-4xl pb-2">Summary</h3>
              <p className="pt-2">
                This is one of the finest places I have ever visited and I had a
                great time
              </p>
            </div>
          </>
        );
      case "features":
        return (
          <>
            <div className="p-4">
              <h3 className="text-4xl pb-2">Features</h3>

              <ul>
                <li>Great Location</li>
                <li>Delicious Food</li>
                <li>Fantastic Music</li>
                <li>Brilliant Cocktails</li>
                <li>Relaxed Atmosphere</li>
              </ul>
            </div>
          </>
        );
      case "specs":
        return (
          <>
            <div className="p-4">
              <h3 className="text-4xl pb-2">Tech Specs</h3>
              <table className="table-auto w-[100%] border-purple-500 rounded">
                <thead className="p-4">
                  <tr className="text-left">
                    <th>Attributte</th>
                    <th>Measurement</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Colour</td>
                    <td>Purple</td>
                    <td>Grainy Texture</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
    }
  }

  return (
    <main>
      {/* tabs */}
      <section>
        <div className="grid grid-cols-1 m-2">
          <ul className="flex justify-evenly">
            <li
              onClick={() => setSelection("summary")}
              className="p-2 bg-purple-200 hover:bg-purple-300 hover:text-white rounded"
            >
              Summary
            </li>
            <li
              onClick={() => setSelection("features")}
              className="p-2 bg-purple-200 hover:bg-purple-300 hover:text-white rounded"
            >
              Features
            </li>
            <li
              onClick={() => setSelection("specs")}
              className="p-2 bg-purple-200 hover:bg-purple-300 hover:text-white rounded"
            >
              Tech Specs
            </li>
          </ul>
        </div>
      </section>
      {/* content */}
      <section>
        <div className="grid p-4 grid-cols-1">
          <div className="p-4">{renderSelection()}</div>
        </div>
      </section>
    </main>
  );
}
