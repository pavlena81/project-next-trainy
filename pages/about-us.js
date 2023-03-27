import styles from '../styles/Home.module.css';

const AboutUsPage = () => {
    return (
        <div className={styles.about_us_page}>
            <h1>About us Page</h1>
            <p>
                Meet Maria, a passionate lover of roses and gardens who dreams of
                creating a beautiful park for people in Ukraine. Maria has always
                been fascinated by the beauty and fragrance of roses, and she spends
                most of her free time tending to her own rose garden.
                Over time, Maria began to dream of creating a beautiful park for people
                in Ukraine where they could come and admire the beauty of roses and other
                flowers. She imagined a park with winding paths, tranquil ponds, and carefully
                manicured gardens filled with a wide variety of roses, each one carefully
                chosen for its beauty and fragrance.She believes that by sharing her love of roses
                and gardens with others, she can help to create a more beautiful and harmonious world.
            </p>
            <h2></h2>
            <ul className={styles.about_us_list}>
                <li>
                    <h3>Poem flowers</h3>
                        <p>
                            we picked ten of the best poems about flowers,
                            to create a kind of anthology: the word ‘anthology’ stemming,
                            we might recall, from the Greek for ‘collection of flowers’.
                            Now, it’s the turn of that most emblematic flower: the rose.
                            Roses are a common feature of love poetry,
                            and are often associated with romance and beauty.
                        </p>
                   
                </li>
                <li>
                    <h3>Rose species</h3>
                        <p>
                        Roses also grow a berry-shaped fruit commonly referred to as ‘rose hips’.
                        The fruit can be orange, red, dark purple, or even black. Rose hips are
                        packed with vitamin C and can be dried to create a refreshing tea.
                        This is why rosehips are sometimes used to create jam, jelly &
                        marmalade. The hip also has minor medicinal uses, used in food
                        supplements and can be pressed or filtered to make rose hip syrup.
                    </p>
                </li>
            </ul>


        </div>
    )
}

export default AboutUsPage;