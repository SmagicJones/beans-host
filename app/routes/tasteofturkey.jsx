import introSquare from "../assets/intro-square.jpg";
import crossing from "../assets/crossing.jpg";
import danger from "../assets/danger.jpg";
import menu from "../assets/menu.jpg";
import choice from "../assets/final-choice.jpg";
import starter from "../assets/starter.jpg";
import main from "../assets/main.jpg";

export default function Tot() {
  return (
    <main>
      <section>
        <div className="grid md:grid-cols-1">
          <div className="bg-lime-400 rounded m-2 text-center p-4">
            <h1 className="text-4xl">Taste of Turkey</h1>
          </div>
        </div>
      </section>
      <section className="m-2">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-lime-300 rounded p-4">
            <p className="p-4">
              Welcome friends to the first installment of Boblogs, wherein I Bob
              Holland chronicle my adventures through the culinary landscape of
              our fair Isle (well the North West, let's not go mad).
            </p>
            <p className="p-4">
              As a lover of fine food (see Burger King rewards Points balance if
              proof needed) I am often on the lookout for establishments of
              culinary excellence so when Tom, an esteemed colleague recommended
              Taste of Turkey, Bamber Bridge I simply had to go.{" "}
            </p>
            <p className="p-4">
              For one, the name intrigued me, was the title of this restaurant a
              clue to the food's country of origin or of a signal a singular
              flavour that would permeate all dishes; would everything taste
              like turkey?
            </p>
            <p className="p-4">
              After probing Tom vigorously on this subject, to the point in
              which I fear it caused two lesser interested colleagues to depart
              for desks on the other side of the office, a table was booked and
              on a sunny Sunday evening in early May I made my journey to Bamber
              Bridge.
            </p>
          </div>
          <div className="rounded p-4">
            <img src={introSquare} alt="" />
          </div>
        </div>
      </section>

      <section className="m-2">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded p-4">
            <img src={crossing} alt="" />
          </div>
          <div className="rounded p-4">
            <img src={danger} alt="" />
          </div>
          <div className="rounded p-4">
            <img src={menu} alt="" />
          </div>
        </div>
      </section>

      <section className="m-2">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded p-4">
            <img src={choice} className="mx-auto rounded" alt="" />
          </div>
          <div className="bg-lime-300 rounded p-4">
            <p className="p-4">
              Taste of Turkey is quaintly situated next to the level crossing
              adding a frisson of danger to the surroundings. The interior is
              that of a rustic if a little plastic taverna, it is charming in
              its way but I feel a plastic turkey or two would add a little je
              ne sais quoi.
            </p>
            <p className="p-4">
              The service was friendly and efficient given how busy it was, the
              chatter of a birthday girl and her gal pals adding to the
              atmosphere, those ladies certainly know how to live, laugh and
              love!
            </p>
            <p className="p-4">
              But what about the food Bob? I hear you say (well I hope its you,
              the doctors said the voices would stop once the meds had kicked
              in), well here is a run down of what we had:
            </p>
          </div>
        </div>
      </section>

      <section className="m-2">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-lime-300 rounded p-4">
            <h3 className="text-4xl text-center">Starter</h3>
            <p className="p-4">
              Kalamari - light and unrubbery not fowl at all 🦃
            </p>
            <p className="p-4">
              Mixed mezze platter - great selection of halloumi, sausage, filo
              pastry thingies - no cranberry sauce needed here 🦃
            </p>
          </div>
          <div className="rounded p-4">
            <img src={starter} className="mx-auto rounded" alt="" />
          </div>
        </div>
      </section>

      <section className="m-2">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded p-4">
            <img src={main} className="mx-auto rounded" alt="" />
          </div>
          <div className="bg-lime-300 rounded p-4">
            <h3 className="text-4xl text-center">Main course</h3>
            <p className="p-4">
              Mixed grill special for 2 and chips - lamb and chicken heavy, I
              guess chicken is kind of like turkey 🦃🦃
            </p>
          </div>
        </div>
      </section>

      <section className="m-2">
        <div className="grid md:grid-cols-1 text-center">
          <div className="rounded p-4 bg-lime-300">
            <p className="p-4">
              We finished with coffees (zero turkey taste) and to my shame I
              denied my amazing companion the chocolate and pistachio cake she
              had been thinking about all week and I shall have to make it up to
              her by taking her somewhere very fancy.
            </p>
            <p className="p-4">
              In conclusion, Taste of Turkey...nothing tasted like turkey and so
              I am 98.7% sure the name refers to the culinary country of origin,
              but no matter because in words of that old turkey worrier Bernard
              Matthews (rip) it was bootiful.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
