import { useState } from "react";

import christmas from "../assets/christmas.webp";

export function NewTab() {
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
            <div className="grid md:grid-cols-2 gap-2">
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
              <div>
                <img src={christmas} alt="" />
              </div>
            </div>
          </>
        );
      case "specs":
        return (
          <>
            <div className="p-4">
              <h3 className="text-4xl pb-2">Tech Specs</h3>
              <div className="bg-slate-300 rounded ">
                <table className="table-auto w-[100%]">
                  <thead className="p-4">
                    <tr className="text-left bg-slate-600 text-white border-b-2">
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
            </div>
          </>
        );
      case "cool":
        return (
          <>
            <div className="p-4 bg-purple-100">
              <h3 className="text-4xl pb-2">Cool Stuff</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-100 p-4 rounded">
                  <h3>Something Wicked</h3>
                </div>
                <div className="bg-purple-100 p-4 rounded">
                  <h3>Something Brilliant</h3>
                </div>
              </div>
            </div>
          </>
        );
    }
  }

  return (
    <>
      <main className="m-4">
        {/* tabs */}
        <section className="border-4 border-purple-100">
          <div className="grid grid-cols-1 m-2">
            <ul className="grid md:grid-cols-4 text-center gap-2">
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
              <li
                onClick={() => setSelection("cool")}
                className="p-2 bg-purple-200 hover:bg-purple-300 hover:text-white rounded"
              >
                Cool Stuff
              </li>
            </ul>
          </div>
        </section>
        {/* content */}
        <section className="border-purple-100 border-2">
          <div className="grid p-4 grid-cols-1">
            <div className="p-4">{renderSelection()}</div>
          </div>
        </section>
      </main>
    </>
  );
}
