class Fetch {
  async getCurrent(input) {
    const myKey = '48a1b532d746da58460d645aa9b37334';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
