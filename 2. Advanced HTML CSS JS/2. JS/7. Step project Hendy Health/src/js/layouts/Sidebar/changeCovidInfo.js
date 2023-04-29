import { find } from '../../tools/index.js'
import { getCovidData } from './getCovidData'
import iconWorld from '../../../assets/images/covid/global.png'
import iconUa from '../../../assets/images/covid/ukraine.png'

const renderInfo = (elements, covidInfo, icon, title) => {
  const [newConfirmed, allConfirmed, deaths] = covidInfo
  const { covidNewRecovered, covidInfected, covidDeaths, covidIconImg, covidIconTitle } = elements

  covidNewRecovered.textContent = `Today infected - ${newConfirmed}`
  covidInfected.textContent = `All infected - ${allConfirmed}`
  covidDeaths.textContent = `All deaths - ${deaths}`
  covidIconImg.src = icon
  covidIconTitle.textContent = title
}

export const changeCovidInfo = async () => {
  const covidInfo = Object.values(await getCovidData())

  const button = find('.covid-button')
  const elements = {
    covidNewRecovered: find('.covid-new-recoverdet'),
    covidInfected: find('.covid-infected'),
    covidDeaths: find('.covid-deaths'),
    covidIconImg: find('.covid-icon-img'),
    covidIconTitle: find('.covid-icon-title'),
  }

  renderInfo(elements, covidInfo.slice(0, 3), iconUa, 'Ukraine')

  button.addEventListener('click', e => {
    const isWorld = e.target.textContent === 'Show World'
    console.log(isWorld)
    if (isWorld) {
      button.textContent = 'Show Ukraine'
      renderInfo(elements, covidInfo.slice(3), iconWorld, 'World')
    } else {
      button.textContent = 'Show World'
      renderInfo(elements, covidInfo.slice(0, 3), iconUa, 'Ukraine')
    }
  })
}
