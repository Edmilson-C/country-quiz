/* eslint-disable consistent-return */
const url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag'

export const requestData = async () => {
  try {
    const res = await fetch(url)
    const response = await res.json()

    return response.reduce((acc, item, index) => {
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

        acc.push({
          question: `What is the capital of ${common}?`,
          answer: [
            { right: capital[0] },
            { wrong: response[temp[0]].capital[0] },
            { wrong: response[temp[1]].capital[0] },
            { wrong: response[temp[2]].capital[0] }
          ]
        })

        acc.push({
          question: `Which country this flag ${flag} belongs to`,
          answer: [
            { right: common },
            { wrong: response[temp[0]].name.common },
            { wrong: response[temp[1]].name.common },
            { wrong: response[temp[2]].name.common }
          ]
        })
      }
      return acc
    }, [])
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(`An error occurred while loading questions \n${error}`)
  }
}
