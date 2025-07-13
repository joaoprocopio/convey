import {
  type AsyncComponentOptions,
  defineAsyncComponent,
  shallowRef,
  watch,
} from 'vue'
import { type RawRouteComponent, useRoute } from 'vue-router'

import { isComp, isFn, isNil } from '~/utils/is'

export function useRouterLayout() {
  const route = useRoute()

  const RouterLayout = shallowRef<RawRouteComponent>()

  watch(
    route,
    () => {
      RouterLayout.value = safeGetComp(route.meta.layout, {
        loadingComponent: safeGetComp(route.meta.layoutLoading),
        errorComponent: safeGetComp(route.meta.layoutError),
      })
    },
    { immediate: true },
  )

  return RouterLayout
}

/**
 * Essa pequena função pode receber:
 *    - funções para lazy import (`async (...) => await import(...)`);
 *    - componentes importados, serão "short-circuitados" para serem renderizados diretamente;
 *    - `undefined` ou `null` para caso você queira ocultar o layout para a determinada rota.
 *
 * O que ela retorna é um componente ou undefined.
 */
function safeGetComp(
  comp: RawRouteComponent | undefined | null,
  options: Omit<AsyncComponentOptions, 'loader' | 'suspensible'> = {},
) {
  if (isNil(comp)) {
    return undefined
  }

  if (isComp(comp)) {
    return comp
  }

  if (isFn(comp)) {
    return defineAsyncComponent({
      ...options,
      suspensible: false,
      loader: comp,
    })
  }

  return undefined
}
