import { Sidebar } from './Sidebar/Sidebar'
import { createEl } from '../tools'

export const Main = createEl({ el: 'main', css: 'main' })
const mainContent = createEl({ el: 'div', css: 'main-content' })

Main.append(Sidebar, mainContent)
