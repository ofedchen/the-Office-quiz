type Props = {
  finalScore: number;
};

type scoreScale = "0-2" | "3-5" | "6-9" | "10+";

type Message = `${scoreScale}: ${string}`;

export default function ScoreMessage({ finalScore }: Props) {
  let message: Message;
  let gifOption: string;
  if (finalScore < 3) {
    message =
      "0-2: Yikes… looks like all you know about the Office is from occasional gifs. Just watch the show!";
    gifOption = "loser.gif";
  } else if (finalScore < 6) {
    message =
      "3-5: You're basically Creed: confused, but sometimes getting things right. Cool beans!";
    gifOption = "ok.gif";
  } else if (finalScore < 10) {
    message =
      "6-9: Not bad at all! You could use a rewatch round or two, but your vibe is perfect";
    gifOption = "great.gif";
  } else {
    message =
      "10+: Legendary! You're the new Assistant Regional Manager. Sorry - Assistant to the Regional Manager.";
    gifOption = "legend.gif";
  }

  return (
    <section className="results">
      <div className="text-container">
        <h2 data-cy="final-score">Your score: {finalScore}</h2>
        <p data-cy="score-message">{message}</p>
      </div>
      <img src={gifOption} alt="final-gif" data-cy="result-gif"/>
    </section>
  );
}
