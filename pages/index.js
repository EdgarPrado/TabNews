function Home() {
    function mostrarmensagem() {
        alert("Se você é safadinha, da uma risadinha 😏");
    }
    return (
    <div>
    <h1> O seu potencial é enorme! </h1> 
    <p> Nunca se esqueça disso. </p>
    <p> E se algum dia se esquecer, lembre-se que estou aqui contigo.</p>
    <button onClick={mostrarmensagem}>Clique aqui</button>
    <p> Beijo pitica! 💜</p>
    </div>
    ) 
}

export default Home;