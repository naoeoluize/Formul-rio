/*
 * Pequeno Príncipe — Formulário de livro encantado
 * Cada pergunta é um slide, com navegação e barra de progresso.
 */
import { FormEvent, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Mail, Send, Sparkles } from "lucide-react";
import { supabase } from "../lib/supabase";

const TOTAL_STEPS = 10;

const stepLabels = [
  "Seu nome",
  "Seu e-mail",
  "O que te faz perder a noção do tempo",
  "Que talento escondido você tem",
  "O último som que te emocionou",
  "Com quem você jantaria",
  "Que lugar te faz sentir em casa",
  "A última coisa que te fez rir",
  "Que pergunta abre portas",
  "Que erro você admite",
];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const progress = Math.round((currentSlide / (TOTAL_STEPS - 1)) * 100);

  const next = useCallback(() => {
    if (currentSlide < TOTAL_STEPS - 1) setCurrentSlide(currentSlide + 1);
  }, [currentSlide]);

  const prev = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  }, [currentSlide]);

  const getSlideClass = (index: number) => {
    if (index === currentSlide) return "slide active";
    return "slide";
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      nome: data.get("nome"),
      email: data.get("email"),
      tempo: data.get("tempo"),
      talento: data.get("talento"),
      som: data.get("som"),
      jantar: data.get("jantar"),
      lar: data.get("lar"),
      riso: data.get("riso"),
      pergunta: data.get("pergunta"),
      erro: data.get("erro"),
    };

    const { error: insertError } = await supabase
      .from("submissions")
      .insert(payload);

    if (insertError) {
      setError(insertError.message);
    } else {
      setSent(true);
    }

    setSubmitting(false);
  }

  return (
    <main className="cosmos-shell">
      <div className="grain" aria-hidden="true" />
      <div className="star-field" aria-hidden="true">
        <span className="star star--one" />
        <span className="star star--two" />
        <span className="star star--three" />
        <span className="star star--four" />
        <span className="star star--five" />
        <span className="constellation-dot dot--one" />
        <span className="constellation-dot dot--two" />
        <span className="constellation-dot dot--three" />
        <span className="constellation-line line--one" />
        <span className="constellation-line line--two" />
      </div>

      <section className="travel-layout" aria-labelledby="page-title">
        <aside className="story-panel">
          <header className="brand-lockup">
            <img className="brand-mark" src="/manus-storage/pq-brand-mark_78424b4d.png" alt="" />
            <span>pequena<br />travessia</span>
          </header>

          <div className="story-copy">
            <p className="eyebrow"><Sparkles size={14} aria-hidden="true" /> quem é você</p>
            <h1 id="page-title">Queremos<br /><em>te conhecer</em>.</h1>
            <p className="intro">Responda com calma. Não há resposta certa — apenas a sua.</p>
          </div>

          <p className="quote">"Só se vê bem com o coração. O essencial é invisível aos olhos."</p>
        </aside>

        <section className="form-sheet" aria-label="Formulário de apresentação">
          <div className="sheet-topline">
            <span>carta para o universo</span>
            <span className="sheet-number">✦ 2026</span>
          </div>

          <div className="sheet-heading">
            <h2>Quem é você?</h2>
            <p>Cada pergunta é uma página. Avance com calma.</p>
          </div>

          {sent ? (
            <div className="success-note" role="status" aria-live="polite">
              <span className="success-icon"><Check size={22} /></span>
              <div>
                <p className="kicker">mensagem recebida</p>
                <h3>O universo já guardou sua carta.</h3>
                <p>Obrigado por se abrir. Cada resposta sua é uma pequena estrela por aqui.</p>
                <button className="text-button" type="button" onClick={() => setSent(false)}>Enviar outra mensagem <ArrowUpRight size={15} /></button>
              </div>
            </div>
          ) : (
            <form className="cosmic-form" onSubmit={handleSubmit}>
              <div className="progress-card">
                <div className="progress-head">
                  <span className="progress-label">Pergunta {currentSlide + 1} de {TOTAL_STEPS} · {stepLabels[currentSlide]}</span>
                  <span className="progress-pct">{progress}%</span>
                </div>
                <div className="progress-track">
                  <div className={`progress-fill ${progress === 100 ? "complete" : ""}`} style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="slides-container">
                <div className={getSlideClass(0)}>
                  <label className="field-group">
                    <span>Seu nome <b>*</b></span>
                    <input name="nome" type="text" placeholder="Como você se chama?" required />
                  </label>
                </div>

                <div className={getSlideClass(1)}>
                  <label className="field-group">
                    <span>Seu e-mail <b>*</b></span>
                    <input name="email" type="email" placeholder="voce@exemplo.com" required />
                  </label>
                </div>

                <div className={getSlideClass(2)}>
                  <label className="field-group">
                    <span>O que te faz perder a noção do tempo? <b>*</b></span>
                    <textarea name="tempo" placeholder="Aquela atividade que quando você começa, o relógio some..." rows={3} required />
                  </label>
                </div>

                <div className={getSlideClass(3)}>
                  <label className="field-group">
                    <span>Que habilidade ou talento escondido você tem? <b>*</b></span>
                    <textarea name="talento" placeholder="Algo que pouca gente sabe que você sabe fazer..." rows={3} required />
                  </label>
                </div>

                <div className={getSlideClass(4)}>
                  <label className="field-group">
                    <span>Qual foi o último som que te emocionou? <b>*</b></span>
                    <textarea name="som" placeholder="Uma música, um som da natureza, uma voz..." rows={3} required />
                  </label>
                </div>

                <div className={getSlideClass(5)}>
                  <label className="field-group">
                    <span>Se você pudesse jantar com qualquer pessoa, quem seria? <b>*</b></span>
                    <textarea name="jantar" placeholder="Viva ou morta, famosa ou desconhecida..." rows={3} required />
                  </label>
                </div>

                <div className={getSlideClass(6)}>
                  <label className="field-group">
                    <span>Que lugar te faz sentir em casa? <b>*</b></span>
                    <textarea name="lar" placeholder="Pode ser um lugar real ou imaginário..." rows={3} required />
                  </label>
                </div>

                <div className={getSlideClass(7)}>
                  <label className="field-group">
                    <span>Qual foi a última coisa que fez você rir alto? <b>*</b></span>
                    <textarea name="riso" placeholder="Aquele riso que veio do fundo da alma..." rows={3} required />
                  </label>
                </div>

                <div className={getSlideClass(8)}>
                  <label className="field-group">
                    <span>Que pergunta você faz com frequência para se conectar com as pessoas? <b>*</b></span>
                    <textarea name="pergunta" placeholder="A pergunta que abre portas..." rows={3} required />
                  </label>
                </div>

                <div className={getSlideClass(9)}>
                  <label className="field-group">
                    <span>Que erro você comete que admite abertamente? <b>*</b></span>
                    <textarea name="erro" placeholder="Aquele erro fofinho que todo mundo comete..." rows={3} required />
                  </label>
                </div>
              </div>

              {error && (
                <p className="form-error">Erro ao enviar: {error}</p>
              )}

              <div className="slide-nav">
                <button
                  type="button"
                  className="nav-btn"
                  onClick={prev}
                  disabled={currentSlide === 0}
                >
                  <ArrowLeft size={16} /> Voltar
                </button>

                {currentSlide === TOTAL_STEPS - 1 ? (
                  <button
                    type="submit"
                    className="nav-btn nav-btn--submit"
                    disabled={submitting}
                  >
                    {submitting ? "Enviando..." : "Enviar carta"} <Send size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="nav-btn nav-btn--submit"
                    onClick={next}
                  >
                    Continuar <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <div className="form-footer">
                <p><Mail size={15} aria-hidden="true" /> Respondemos em até dois dias úteis.</p>
              </div>
            </form>
          )}

          <div className="sheet-bottomline">
            <span>feito com cuidado, entre uma estrela e outra</span>
            <span className="privacy-note">seus dados ficam seguros</span>
          </div>
        </section>
      </section>
    </main>
  );
}
