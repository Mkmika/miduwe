import { Poppins } from "next/font/google"
import localFont from "next/font/local"

const naluka = localFont({ src: '../public/fonts/Naluka.ttf' })
const poppins = Poppins({subsets: ["latin"], weight: ["400", "500", "600", "700"]})

export {naluka, poppins}