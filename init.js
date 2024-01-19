window.onload = funGeneration();
document
  .getElementById("buttonGeneration")
  .addEventListener("click", function () {
    funGeneration();
  });

function funGeneration() {

  const initPerson = personGenerator.getPerson();
  document.getElementById("firstNameOutput").innerText = initPerson.firstName;
  document.getElementById("surNameOutput").innerText = initPerson.surName;
  document.getElementById("birthYearOutput").innerText =
    initPerson.birthYear + " г.";
  document.getElementById("monthBirthOutput").innerText = initPerson.monthBirth;
  document.getElementById("dataBirthOutput").innerText = initPerson.dataBirth;
  // вывод пола
  document.getElementById("genderOutput").innerText = initPerson.gender;
  document.getElementById("proffOutput").innerText = initPerson.proffName;
  document.getElementById("patronomicOutput").innerText = initPerson.patronomic;
}
document.getElementById("buttonClear").addEventListener("click", function () {
  document.getElementById("firstNameOutput").innerText = "Имя";
  document.getElementById("surNameOutput").innerText = "Фамилия";
  document.getElementById("birthYearOutput").innerText = "Год";
  document.getElementById("monthBirthOutput").innerText = "Месяц ";
  document.getElementById("dataBirthOutput").innerText = "Дата ";
  // вывод пола
  document.getElementById("genderOutput").innerText = "Пол";
  document.getElementById("proffOutput").innerText = "Профессия";
  document.getElementById("patronomicOutput").innerText = "Отчество";
});