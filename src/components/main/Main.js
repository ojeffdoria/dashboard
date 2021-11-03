import ChartVps from "../charts/ChartVps";
import ChartSla from "../charts/ChartSla";
import ChartPmc from "../charts/ChartPmc";
import ChartConfidenc from "../charts/ChartConfidenc";
import ChartDispon from "../charts/ChartDispon";
import ChartIntegrid from "../charts/ChartIntegrid";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <h2 className="text-title-primary-h2">Ativos Vulneráveis</h2>
              <span className="font-bold text-title">92</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <h2 className="text-title-primary-h2">
                Backlog Vulnerabildiades
              </h2>
              <span className="font-bold text-title">1227</span>
            </div>
          </div>

          <div className="card bg-warning">
            <div className="card_inner">
              <h2 className="text-title-primary-h2 text-light">Zero Day</h2>
              <span className="font-bold text-title text-light">11</span>
            </div>
          </div>

          <div className="card bg-danger">
            <div className="card_inner">
              <h2 className="text-title-primary-h2 text-light">Malware</h2>
              <span className="font-bold text-title text-light">143</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h2 className="text-title-primary-h2">SLA</h2>
              </div>
            </div>
            <ChartSla />
          </div>
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h2 className="text-title-primary-h2">
                  Possui Medida Compensatória
                </h2>
              </div>
            </div>
            <ChartPmc />
          </div>
        </div>
          
        <div className="charts_middle">

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h2 className="text-title-primary-h2">
                  Vulnerabilidade Por Status
                </h2>
              </div>
            </div>
            <ChartVps />
          </div>

        </div>
        <div className="charts_bottom">
          <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h2 className="text-title-primary-h2">
                  Confidencialidade
                  </h2>
                </div>
              </div>
              <ChartConfidenc />
            </div>
            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h2 className="text-title-primary-h2">
                  Disponibilidade
                  </h2>
                </div>
              </div>
              <ChartDispon />
            </div>
            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h2 className="text-title-primary-h2">
                  Integridade
                  </h2>
                </div>
              </div>
              <ChartIntegrid />
            </div>
        </div>

      </div>
    </main>
  );
};

export default Main;
