import { useState } from "react"
import "./hero.css"
import Card from "./Card"

import img1 from "../../assets/hero/hero1.jpg"
import img2 from "../../assets/hero/hero2.jpg"
import img3 from "../../assets/hero/hero3.jpg";
import img4 from "../../assets/hero/hero4.jpg";

const Hero = () => {
  const hero = [
    {
      id: 1,
      cover: img1,
      category: "featured",
      title: "Tigris Group: A Leader in National and International Events",
      authorName: "Tigris Group",
      authorImg: img2,
      time: "5 Jun - 2022",
      desc: [
        {
          para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
        },
        {
          para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
        },
        {
          para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
        },
      ],
      details: [
        {
          title: "Starting a new company is easy",
        },
        { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
        {
          quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
        },
        {
          para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
        },
        {
          para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
        },
      ],
    },
    {
      id: 2,
      cover: img2,
      category: "company",
      title: "Tigris Group has been a prominent partner in organizing some of the most successful national and international events.",
      authorName: "Company",
      authorImg: img2,
      time: "12 Aug - 2022",
      desc: [
        {
          para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
        },
        {
          para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
        },
        {
          para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
        },
      ],
      details: [
        {
          title: "Starting a new company is easy",
        },
        { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
        {
          quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
        },
        {
          para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
        },
        {
          para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
        },
      ],
    },
    {
      id: 3,
      cover: img3,
      category: "technology",
      title: "Our mission at Tigris Group is to lead the way in event management and tourism services by delivering innovative, high-quality, and personalized solutions that exceed our clients' expectations.",
      authorName: "About",
      authorImg: "../images/author.jpg",
      time: "22 Mar - 2022",
      desc: [
        {
          para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
        },
        {
          para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
        },
        {
          para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
        },
      ],
      details: [
        {
          title: "Starting a new company is easy",
        },
        { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
        {
          quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
        },
        {
          para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
        },
        {
          para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
        },
      ],
    },
    {
      id: 4,
      cover: img4,
      category: "services",
      title: "We are committed to fostering strong partnerships with businesses and organizations, ensuring their success through professional and seamless execution of events and travel experiences.",
      authorName: "Services",
      authorImg: "../images/author.jpg",
      time: "08 Dec - 2022",
      desc: [
        {
          para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
        },
        {
          para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
        },
        {
          para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
        },
      ],
      details: [
        {
          title: "Starting a new company is easy",
        },
        { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
        {
          quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
        },
        {
          para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
        },
        {
          para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
        },
      ],
    },
  ]

  const [items, setIems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container lg:ml-25'>
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero
