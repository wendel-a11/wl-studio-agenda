import { useState } from "react";

const START_HOUR = 7;
const END_HOUR = 21;
const SLOT_MINUTES = 40;

function generateHours() {
  const hours = [];
  let total = START_HOUR * 60;
  while (total < END_HOUR * 60) {
    const h = String(Math.floor(total / 60)).padStart(2, "0");
    const m = String(total % 60).padStart(2, "0");
    hours.push(`${h}:${m}`);
    total += SLOT_MINUTES;
  }
  return hours;
}

export default function App() {
  const hours = generateHours();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([
    { name: "Corte normal", price: 20 },
    { name: "Barba", price: 15 },
  ]);

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function login() {
    if (password === "wl@00") {
      setUser({ admin: true });
    } else if (name && phone) {
      setUser({ name, phone, admin: false });
    }
  }

  function book() {
    if (service && date && time) {
      setAppointments([
        ...appointments,
        { name: user.name, phone: user.phone, service, date, time },
      ]);
      setService("");
      setDate("");
      setTime("");
    }
  }

  function cancel(index) {
    setAppointments(appointments.filter((_, i) => i !== index));
  }

  function addService() {
    setServices([...services, { name: "Novo corte", price: 0 }]);
  }

  function updateService(i, field, value) {
    const copy = [...services];
    copy[i][field] = value;
    setServices(copy);
  }

  return (
    <div style={{ maxWidth: 500, margin: "auto", fontFamily: "Arial" }}>
      <h1>WL Studio ✂️</h1>
      <p>Rua Bernardo Jardim Júlio, nº 6</p>

      {!user && (
        <>
          <input placeholder="Nome" onChange={e => setName(e.target.value)} />
          <input placeholder="Telefone" onChange={e => setPhone(e.target.value)} />
          <input
            placeholder="Senha (barbeiro)"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={login}>Entrar</button>
        </>
      )}

      {user && !user.admin && (
        <>
          <a href="https://wa.me/5511920443885">
            <button>Atendimento via WhatsApp</button>
          </a>

          <h3>Agendar horário</h3>

          <select onChange={e => setService(e.target.value)}>
            <option value="">Escolha o serviço</option>
            {services.map((s, i) => (
              <option key={i} value={s.name}>
                {s.name} - R$ {s.price}
              </option>
            ))}
          </select>

          <input type="date" onChange={e => setDate(e.target.value)} />

          <select onChange={e => setTime(e.target.value)}>
            <option value="">Escolha o horário</option>
            {hours.map(h => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>

          <button onClick={book}>Confirmar agendamento</button>
        </>
      )}

      {user?.admin && (
        <>
          <h3>Painel do Barbeiro</h3>

          {appointments.map((a, i) => (
            <div key={i}>
              {a.date} {a.time} - {a.name} ({a.service})
              <button onClick={() => cancel(i)}>Cancelar</button>
            </div>
          ))}

          <h4>Serviços</h4>

          {services.map((s, i) => (
            <div key={i}>
              <input
                value={s.name}
                onChange={e => updateService(i, "name", e.target.value)}
              />
              <input
                type="number"
                value={s.price}
                onChange={e => updateService(i, "price", e.target.value)}
              />
            </div>
          ))}

          <button onClick={addService}>Adicionar novo corte</button>
        </>
      )}
    </div>
  );
}
