const url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag'
const requestedData = []

fetch(url)
  .then((res) => res.json())
  .then((response) => {
    response.forEach((item, index) => {
      if (item.flag !== '' && item.capital.length !== 0) {
        const {
          name: { common },
          flag,
          capital
        } = item

        const temp = []
        while (temp.length < 3) {
          const randomIndex = Math.floor(Math.random() * (response.length - 1))
          if (randomIndex !== index) {
            temp.push(randomIndex)
          }
        }

        requestedData.push({
          question: `What is the capital of ${common}?`,
          answer: [
            { right: capital[0] },
            { wrong: response[temp[0]].capital[0] },
            { wrong: response[temp[1]].capital[0] },
            { wrong: response[temp[2]].capital[0] }
          ]
        })

        requestedData.push({
          question: `Which country this flag ${flag} belongs to`,
          answer: [
            { right: common },
            { wrong: response[temp[0]].name.common },
            { wrong: response[temp[1]].name.common },
            { wrong: response[temp[2]].name.common }
          ]
        })
      }
    })
  })
  .catch((error) => {
    // eslint-disable-next-line no-alert
    alert(`An error occurred while loading questions \n${error}`)
  })

export default requestedData
