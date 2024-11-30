import van from "../assets/van.jpg";
import hat from "../assets/hat.jpg";
import chips from "../assets/chips.jpg";
import lasagne from "../assets/lasagne.jpg";

export default function Bridge() {
  return (
    <>
      <section className="m-2">
        <div className="grid md:grid-cols-1">
          <div className="bg-purple-400 rounded m-2 text-center p-4">
            <h1 className="text-4xl">Bridgfest</h1>
          </div>
        </div>
      </section>
      <section className="m-2">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-300 rounded p-4 flex items-center">
            <div>
              <p className="p-4">
                So last week we tasted Turkey, it was a success it tasted good.
                This weekend I stayed a little closer to home and tasted
                Stalybridge and Ashton.
              </p>
              <p className="p-4">
                As it was the 2nd Friday of the month I headed to Streetfest in
                Stalybridge centre (near big Tesco). A couple of ciders in I
                sampled the beef burrito from the Wrap Scallions truck...turns
                out eating a substantial burrito while trying holding a phone is
                impossible therefore no photos of said burrito however here is
                me approaching the queue looking chuft.
              </p>
            </div>
          </div>
          <div className="rounded p-4">
            <img
              src={van}
              alt=""
              width="100%"
              className="max-h-[500px] rounded-xl"
            />
          </div>
        </div>
      </section>

      <main className="bg-purple-200 m-4">
        <section className="m-2">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded p-4">
              <img
                src={hat}
                className="mx-auto  max-h-[500px] rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-300 rounded p-4 flex items-center">
              <div>
                <p className="p-4">
                  We didn't sample anything else, the burrito was quite
                  satisfying and as it was a lovely sunny evening it a was a
                  little crowded, so we headed home for a much needed chill
                  after we'd been working all week. Rootbeer and crisps made an
                  appearance as we watched multiple episodes of Narrow Escapes
                  (middle age looms guys).
                </p>
                <p className="p-4">
                  Saturday was another chilled affair, plant based sausage
                  butties and brews and then a saunter into Ashton to check out
                  a used game shop I'd googled. Nipped into the market en route
                  and picked myself up a natty chapeau to keep the head cool in
                  the sunny weeks to come...what do you think guys?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-2">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded p-4">
              <img
                src={chips}
                className="mx-auto  max-h-[500px] rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-300 rounded p-4 flex items-center">
              <div>
                <p className="p-4">
                  My companion gave me a tour and showed me the chippy they
                  frequented as a child. A bit of a mid 80s time capsule, Gold
                  Medal has its charm in the pine wood paneling and murals of
                  the Swiss alps, the decor I am told hasn't changed since Bros
                  were riding high in the pop charts but who cares when the
                  chips are this good and plentiful!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="m-2">
        <div className="grid md:grid-cols-1 text-center">
          <div className="rounded p-4 bg-purple-300 flex items-center">
            <div>
              <p className="p-4">
                One could be forgiven I'm carb loading for a decathlon but for
                tea, aforementioned companion knocked up a mac n cheese and we
                settled in for my first ever Eurovision...interesting....
              </p>
              <div>
                <img
                  src={lasagne}
                  alt=""
                  className="mx-auto  max-h-[500px] rounded-xl"
                />
              </div>
              <p className="p-4">
                So that was my weekend eating, nothing spectacular this weekend
                but good old grub (and even better company)!
              </p>
              <p className="p-4">See you next time</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
