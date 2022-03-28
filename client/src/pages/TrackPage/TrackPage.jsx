import "./TrackPage.scss";

function TrackPage() {
  return (
    <main className="track">
      <h1>monthly expense</h1>

      <input type="text" name="company" id="company" placeholder="Expense" />
      <input type="text" name="price" id="price" placeholder="Price" />
      <button>Add</button>
      <p></p>
    </main>
  );
}

export default TrackPage;
