import { initHttpConfig } from '../http/nftscan.http';

export default class NftscanInit {
  static created = false;

  static onCreate() {
    if (this.created) {
      return;
    }
    this.created = true;
    initHttpConfig();
  }
}
