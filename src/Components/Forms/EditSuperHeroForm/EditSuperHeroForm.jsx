import React, { useState } from 'react'
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

const EditSuperHeroForm = ({ superhero, edit }) => {
  const [name, setName] = useState(superhero.name)
  const [publisher, setPublisher] = useState(superhero.publisher)

  const [fullName, setFullName] = useState(superhero.biography.fullName)
  const [alignment, setAlignment] = useState(superhero.biography.alignment)
  const [race, setRace] = useState(superhero.appearance.race)
  const [gender, setGender] = useState(superhero.appearance.gender)

  const [intelligence, setIntelligence] = useState(superhero.powerstats.intelligence)
  const [strength, setStrength] = useState(superhero.powerstats.strength)
  const [speed, setSpeed] = useState(superhero.powerstats.speed)
  const [durability, setDurability] = useState(superhero.powerstats.durability)
  const [combat, setCombat] = useState(superhero.powerstats.combat)

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
    edit(data)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Details</h2>
      <div className={styles.image}>
        <img src={superhero.images} alt="superhero-single" />
        <button>Edit</button>
      </div>
      <Input setValue={setName} value={name} name="Name" required={true} />
      <Input setValue={setPublisher} value={publisher} name="Publisher" />
      <h2>Biography</h2>
      <Input setValue={setFullName} value={fullName} name="Full Name" />
      <Input setValue={setAlignment} value={alignment} name="Alignment" />
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
