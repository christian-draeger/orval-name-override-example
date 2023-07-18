/**
 * Generated by orval v6.11.1 🍺
 * Do not edit manually.
 * Swagger Petstore 1
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  PetsFirstApiDTO,
  ErrorFirstApiDTO
} from '../../models'


/**
 * @summary List all pets
 */
export const getFirstApilistPets = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PetsFirstApiDTO>> => {
    return axios.get(
      `/pets`,options
    );
  }


export const getGetFirstApilistPetsQueryKey = () => [`/pets`];

    
export type GetFirstApilistPetsQueryResult = NonNullable<Awaited<ReturnType<typeof getFirstApilistPets>>>
export type GetFirstApilistPetsQueryError = AxiosError<ErrorFirstApiDTO>

export const useGetFirstApilistPets = <TData = Awaited<ReturnType<typeof getFirstApilistPets>>, TError = AxiosError<ErrorFirstApiDTO>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getFirstApilistPets>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetFirstApilistPetsQueryKey();

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFirstApilistPets>>> = ({ signal }) => getFirstApilistPets({ signal, ...axiosOptions });


  

  const query = useQuery<Awaited<ReturnType<typeof getFirstApilistPets>>, TError, TData>(queryKey, queryFn, queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

