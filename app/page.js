import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';

import OurService from '../app/components/ourService/services'

export default function Home() {
  return (
    <>
    <div >
      <OurService />
    </div>
    </>
  );
}
