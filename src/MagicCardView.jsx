import styles from './MagicCardView.module.css'

function MagicCardView({card}){
    return (
        <div className={styles.MagicCardView}>
            <h1>{card.name}</h1>
            <h2>
                {card.colors.map((color, index) => {
                // Creating an array of &#9210, one for each manaCost
                let costPips = new Array(color.manaCost).fill('⏺');
                // Joining the array into a string and setting the color
                return <span key={index} style={{color: color.colorName}}>{costPips.join('')}</span>
                })}
            </h2>
            <h3>{card.type} - {card.subtype}</h3>
            <p className={styles.desc}>{card.description}</p>
            <div>
                {card.abilities.map((ability) => {
                return (
                    <div style={{margin: '0px'}}>
                        <h3>{ability.name}</h3>
                        <p>{ability.description}</p>
                    </div>
                    )
                })}
            </div>
            <h2>&#91; {card.attack} / {card.defense} &#93;</h2>
        </div>
    )
}

export default MagicCardView