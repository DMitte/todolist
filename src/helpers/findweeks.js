import { format } from "core-js/core/date";
import moment from "moment";

function ObtenerDiasSemana(fecha) {
  const diasemana = moment(fecha).day();
  const inicioSemana = moment(fecha).subtract(diasemana, "days");
  const diasSemana = [];

  for (let i = 0; i < 7; i++) {
    diasSemana.push(moment(inicioSemana).add(i, "days"), format("DD-MM-YYYY"));
  }

  return diasSemana;
}
