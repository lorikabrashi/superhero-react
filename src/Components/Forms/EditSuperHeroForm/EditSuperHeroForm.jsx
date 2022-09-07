import React, { useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from './EditSuperHeroForm.module.scss'

const Input = ({ value, setValue, name, type = 'text', required = false }) => (
  <Form.Group className="mb-3">
    <Form.Label>{name}</Form.Label>
    <input
      type={type}
      required={required}
      className="form-control"
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      placeholder=""
    />
  </Form.Group>
)

const EditSuperHeroForm = ({ superhero, edit, changeImage }) => {
  const [name, setName] = useState(superhero.name)
  const [publisher, setPublisher] = useState(superhero.publisher)

  const [image] = useState(superhero.images)
  const fileRef = useRef(null)

  const [fullName, setFullName] = useState(superhero.biography.fullName)
  const [alignment, setAlignment] = useState(superhero.biography.alignment)
  const [race, setRace] = useState(superhero.appearance.race)
  const [gender, setGender] = useState(superhero.appearance.gender)

  const [aliases, setAliases] = useState(superhero.biography.aliases)

  const [intelligence, setIntelligence] = useState(superhero.powerstats.intelligence)
  const [strength, setStrength] = useState(superhero.powerstats.strength)
  const [speed, setSpeed] = useState(superhero.powerstats.speed)
  const [durability, setDurability] = useState(superhero.powerstats.durability)
  const [combat, setCombat] = useState(superhero.powerstats.combat)

  const handleAddAliases = (e) => {
    e.preventDefault()
    const aliasesTemp = [...aliases]
    aliasesTemp.push('')
    setAliases(aliasesTemp)
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    changeImage(fileRef.current.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name,
      publisher,
      biography: {
        fullName,
        alignment,
      },
      appearance: {
        race,
        gender,
      },
      powerstats: {
        intelligence,
        strength,
        speed,
        durability,
        combat,
      },
    }
    if (aliases.length) {
      data.biography.aliases = aliases
    }
    edit(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Details</h2>
      <div className={styles.image}>
        <img src={image.startsWith('http') ? image : process.env.REACT_APP_API_URL + image} alt="superhero-single" />
        <input ref={fileRef} type="file" onChange={handleImageChange} name="superhero-image" accept="image/png, image/jpeg" />
      </div>
      <Input setValue={setName} value={name} name="Name" required={true} />
      <Input setValue={setPublisher} value={publisher} name="Publisher" />
      <h2>Biography</h2>
      <Input setValue={setFullName} value={fullName} name="Full Name" />
      <Input setValue={setAlignment} value={alignment} name="Alignment" />

      <div>
        {aliases.map((elem, index) => {
          return (
            <Form.Group key={index} className="mb-3">
              <Form.Label>{`Aliases ${index + 1}`}</Form.Label>
              <input
                type="text"
                className="form-control"
                value={elem}
                onChange={(e) => {
                  const tempAliases = [...aliases]
                  tempAliases[index] = e.target.value
                  setAliases(tempAliases)
                }}
                placeholder=""
              />
            </Form.Group>
          )
        })}
        <button onClick={handleAddAliases}>Add Aliases</button>
      </div>

      <h2>Appearance</h2>
      <Input setValue={setRace} value={race} name="Race" />
      <Input setValue={setGender} value={gender} name="Gender" />
      <h2>Power Stats</h2>
      <Input setValue={setIntelligence} value={intelligence} name="Intelligence" type="number" />
      <Input setValue={setStrength} value={strength} name="Strength" type="number" />
      <Input setValue={setSpeed} value={speed} name="Speed" type="number" />
      <Input setValue={setDurability} value={durability} name="Durability" type="number" />
      <Input setValue={setCombat} value={combat} name="Combat" type="number" />

      <div className="submit">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}

export default EditSuperHeroForm
