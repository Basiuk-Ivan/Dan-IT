import ky from 'ky'
import { covidLocalData, strFinishCovid } from './sidebar.utils'

export const getCovidData = async () => {
  const { Countries, Global } = await ky.get('https://api.covid19api.com/summary').json()

  if (!Countries) {
    return covidLocalData
  } else {
    const UACovidInfo = Countries.filter(elem => elem.Country === 'Ukraine')
    const [{ NewConfirmed: newConfirmed, TotalConfirmed: allConfirmed, TotalDeaths: allDeaths }] = UACovidInfo
    const {
      NewConfirmed: newConfirmedWorld,
      TotalConfirmed: allWorldConfirmed,
      TotalDeaths: allWorldDeaths,
    } = Global

    const covidData = {
      UAnew: newConfirmed,
      UAConfirmed: strFinishCovid(allConfirmed),
      UADeaths: strFinishCovid(allDeaths),
      worldNew: strFinishCovid(newConfirmedWorld),
      worldConfirmed: strFinishCovid(allWorldConfirmed),
      worldDeaths: strFinishCovid(allWorldDeaths),
    }

    return covidData
  }
}
