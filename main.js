function showMaturityAmount(event) {
  event.preventDefault();
  // Grab principle, interest, and tenure
  const principle = parseFloat(document.getElementById("principle").value);
  const interest = parseFloat(document.getElementById("interestRate").value);
  const tenure = parseFloat(document.getElementById("tenure").value);

  //   calculate the percentage
  const percentage = (principle * interest) / 100;

  //   Calculate the percentage with tenure
  const percentageWithTenure = percentage * tenure;

  //   Calculate the total amount with interest and tenure
  const total = principle + percentageWithTenure;

  //   Show the total amount inside the HTML element
  document.getElementById(
    "showMaturity"
  ).innerText = `Show Maturity: ${total.toFixed(2)}`;

  console.log("PERCENTAGE ==> ", percentage);
  console.log("PERCENTAGE tenure ==> ", percentageWithTenure);
  console.log("Total", total);
}
