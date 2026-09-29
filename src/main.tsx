// M3 boot probe (R3-465): prove an M3-stance app boots END TO END through the
// hardened origin — renders, and the SDK channel answers a baseline read.
import { getMounts, getReadyState } from '@immediately-run/sdk';

const root = document.getElementById('root')!;
root.textContent = 'M3 BOOT PENDING';

(async () => {
  try {
    const mounts = getMounts();
    root.textContent = `M3 BOOT OK — mounts:${mounts.length} ready:${getReadyState().reported}`;
  } catch (e) {
    root.textContent = 'M3 BOOT SDK-ERROR: ' + String((e as Error)?.message ?? e);
  }
})();
