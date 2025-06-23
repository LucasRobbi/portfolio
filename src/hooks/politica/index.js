import useSWR from "swr";
import fetcher from "../../config/fetcher/";

export default function usePolitica({ id }) {
  const { data, isLoading } = useSWR("https://frequencia.com.br/api/politica/id?id=" + id, fetcher);

  return { data, isLoading };
}