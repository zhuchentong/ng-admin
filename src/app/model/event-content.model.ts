import { Expose } from 'class-transformer';

import { Model } from '.';

export class EventContentModel extends Model {
  @Expose({
    name: '$carrier_name'
  })
  public carrierName: string;

  @Expose({
    name: '$screen_height'
  })
  public screenHeight: string;

  public $lib: string;
}
// public producttype_list": "\u5b58\u6b3e",
// public $is_first_time": false,
// public statement_date": "2018-06-17 04:26:14.693",
// public $brand": "Xiaomi",
// public $os": "Android",
// public $ip": "60.176.219.64",
// public $network": "WIFI",
// public $debug": 0,
// public $os_version": "8.0.0",
// public $platform": "Android",
// public $lib_version": "0.1",
// public $channel": "Xiaomi AppStore",
// public accountbalance_d": 350000.0,
// public accountbalance_c": 500000.0,
// public $screen_width": 1920.0,
// public ds": "20180601",
// public device_id": "99001084483730-460110807102107-dc942968b5566f88",
// public $model": "MI 6",
// public $app_version": "6.8.0|52",
// public $is_login": false
