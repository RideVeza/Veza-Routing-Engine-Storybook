import{a as axios}from"./httpClient-BlwsOI9O.js";import{g as getDefaultExportFromCjs}from"./index-BP8_t0zE.js";var parser$5={};parser$5.load=function(s,t,e={}){var r,n,i;for(r in t)i=t[r],e[r]=(n=s[r])!=null?n:i;return e};parser$5.overwrite=function(s,t,e={}){var r,n;for(r in s)n=s[r],t[r]!==void 0&&(e[r]=n);return e};var DLList$2;DLList$2=class{constructor(t,e){this.incr=t,this.decr=e,this._first=null,this._last=null,this.length=0}push(t){var e;this.length++,typeof this.incr=="function"&&this.incr(),e={value:t,prev:this._last,next:null},this._last!=null?(this._last.next=e,this._last=e):this._first=this._last=e}shift(){var t;if(this._first!=null)return this.length--,typeof this.decr=="function"&&this.decr(),t=this._first.value,(this._first=this._first.next)!=null?this._first.prev=null:this._last=null,t}first(){if(this._first!=null)return this._first.value}getArray(){var t,e,r;for(t=this._first,r=[];t!=null;)r.push((e=t,t=t.next,e.value));return r}forEachShift(t){var e;for(e=this.shift();e!=null;)t(e),e=this.shift()}debug(){var t,e,r,n,i;for(t=this._first,i=[];t!=null;)i.push((e=t,t=t.next,{value:e.value,prev:(r=e.prev)!=null?r.value:void 0,next:(n=e.next)!=null?n.value:void 0}));return i}};var DLList_1=DLList$2;function asyncGeneratorStep$6(s,t,e,r,n,i,o){try{var a=s[i](o),c=a.value}catch(f){e(f);return}a.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator$6(s){return function(){var t=this,e=arguments;return new Promise(function(r,n){var i=s.apply(t,e);function o(c){asyncGeneratorStep$6(i,r,n,o,a,"next",c)}function a(c){asyncGeneratorStep$6(i,r,n,o,a,"throw",c)}o(void 0)})}}var Events$3;Events$3=class{constructor(t){if(this.instance=t,this._events={},this.instance.on!=null||this.instance.once!=null||this.instance.removeAllListeners!=null)throw new Error("An Emitter already exists for this object");this.instance.on=(e,r)=>this._addListener(e,"many",r),this.instance.once=(e,r)=>this._addListener(e,"once",r),this.instance.removeAllListeners=(e=null)=>e!=null?delete this._events[e]:this._events={}}_addListener(t,e,r){var n;return(n=this._events)[t]==null&&(n[t]=[]),this._events[t].push({cb:r,status:e}),this.instance}listenerCount(t){return this._events[t]!=null?this._events[t].length:0}trigger(t,...e){var r=this;return _asyncToGenerator$6(function*(){var n,i;try{return t!=="debug"&&r.trigger("debug",`Event triggered: ${t}`,e),r._events[t]==null?void 0:(r._events[t]=r._events[t].filter(function(o){return o.status!=="none"}),i=r._events[t].map(function(){var o=_asyncToGenerator$6(function*(a){var c,f;if(a.status!=="none"){a.status==="once"&&(a.status="none");try{return f=typeof a.cb=="function"?a.cb(...e):void 0,typeof(f!=null?f.then:void 0)=="function"?yield f:f}catch(E){return c=E,r.trigger("error",c),null}}});return function(a){return o.apply(this,arguments)}}()),(yield Promise.all(i)).find(function(o){return o!=null}))}catch(o){return n=o,r.trigger("error",n),null}})()}};var Events_1=Events$3,DLList$1,Events$2,Queues;DLList$1=DLList_1;Events$2=Events_1;Queues=class{constructor(t){this.Events=new Events$2(this),this._length=0,this._lists=(function(){var e,r,n;for(n=[],e=1,r=t;1<=r?e<=r:e>=r;1<=r?++e:--e)n.push(new DLList$1(()=>this.incr(),()=>this.decr()));return n}).call(this)}incr(){if(this._length++===0)return this.Events.trigger("leftzero")}decr(){if(--this._length===0)return this.Events.trigger("zero")}push(t){return this._lists[t.options.priority].push(t)}queued(t){return t!=null?this._lists[t].length:this._length}shiftAll(t){return this._lists.forEach(function(e){return e.forEachShift(t)})}getFirst(t=this._lists){var e,r,n;for(e=0,r=t.length;e<r;e++)if(n=t[e],n.length>0)return n;return[]}shiftLastFrom(t){return this.getFirst(this._lists.slice(t).reverse()).shift()}};var Queues_1=Queues,BottleneckError$4;BottleneckError$4=class extends Error{};var BottleneckError_1=BottleneckError$4;function asyncGeneratorStep$5(s,t,e,r,n,i,o){try{var a=s[i](o),c=a.value}catch(f){e(f);return}a.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator$5(s){return function(){var t=this,e=arguments;return new Promise(function(r,n){var i=s.apply(t,e);function o(c){asyncGeneratorStep$5(i,r,n,o,a,"next",c)}function a(c){asyncGeneratorStep$5(i,r,n,o,a,"throw",c)}o(void 0)})}}var BottleneckError$3,DEFAULT_PRIORITY,Job,NUM_PRIORITIES,parser$4;NUM_PRIORITIES=10;DEFAULT_PRIORITY=5;parser$4=parser$5;BottleneckError$3=BottleneckError_1;Job=class{constructor(t,e,r,n,i,o,a,c){this.task=t,this.args=e,this.rejectOnDrop=i,this.Events=o,this._states=a,this.Promise=c,this.options=parser$4.load(r,n),this.options.priority=this._sanitizePriority(this.options.priority),this.options.id===n.id&&(this.options.id=`${this.options.id}-${this._randomIndex()}`),this.promise=new this.Promise((f,E)=>{this._resolve=f,this._reject=E}),this.retryCount=0}_sanitizePriority(t){var e;return e=~~t!==t?DEFAULT_PRIORITY:t,e<0?0:e>NUM_PRIORITIES-1?NUM_PRIORITIES-1:e}_randomIndex(){return Math.random().toString(36).slice(2)}doDrop({error:t,message:e="This job has been dropped by Bottleneck"}={}){return this._states.remove(this.options.id)?(this.rejectOnDrop&&this._reject(t??new BottleneckError$3(e)),this.Events.trigger("dropped",{args:this.args,options:this.options,task:this.task,promise:this.promise}),!0):!1}_assertStatus(t){var e;if(e=this._states.jobStatus(this.options.id),!(e===t||t==="DONE"&&e===null))throw new BottleneckError$3(`Invalid job status ${e}, expected ${t}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`)}doReceive(){return this._states.start(this.options.id),this.Events.trigger("received",{args:this.args,options:this.options})}doQueue(t,e){return this._assertStatus("RECEIVED"),this._states.next(this.options.id),this.Events.trigger("queued",{args:this.args,options:this.options,reachedHWM:t,blocked:e})}doRun(){return this.retryCount===0?(this._assertStatus("QUEUED"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),this.Events.trigger("scheduled",{args:this.args,options:this.options})}doExecute(t,e,r,n){var i=this;return _asyncToGenerator$5(function*(){var o,a,c;i.retryCount===0?(i._assertStatus("RUNNING"),i._states.next(i.options.id)):i._assertStatus("EXECUTING"),a={args:i.args,options:i.options,retryCount:i.retryCount},i.Events.trigger("executing",a);try{if(c=yield t!=null?t.schedule(i.options,i.task,...i.args):i.task(...i.args),e())return i.doDone(a),yield n(i.options,a),i._assertStatus("DONE"),i._resolve(c)}catch(f){return o=f,i._onFailure(o,a,e,r,n)}})()}doExpire(t,e,r){var n,i;return this._states.jobStatus(this.options.id==="RUNNING")&&this._states.next(this.options.id),this._assertStatus("EXECUTING"),i={args:this.args,options:this.options,retryCount:this.retryCount},n=new BottleneckError$3(`This job timed out after ${this.options.expiration} ms.`),this._onFailure(n,i,t,e,r)}_onFailure(t,e,r,n,i){var o=this;return _asyncToGenerator$5(function*(){var a,c;if(r())return a=yield o.Events.trigger("failed",t,e),a!=null?(c=~~a,o.Events.trigger("retry",`Retrying ${o.options.id} after ${c} ms`,e),o.retryCount++,n(c)):(o.doDone(e),yield i(o.options,e),o._assertStatus("DONE"),o._reject(t))})()}doDone(t){return this._assertStatus("EXECUTING"),this._states.next(this.options.id),this.Events.trigger("done",t)}};var Job_1=Job;function asyncGeneratorStep$4(s,t,e,r,n,i,o){try{var a=s[i](o),c=a.value}catch(f){e(f);return}a.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator$4(s){return function(){var t=this,e=arguments;return new Promise(function(r,n){var i=s.apply(t,e);function o(c){asyncGeneratorStep$4(i,r,n,o,a,"next",c)}function a(c){asyncGeneratorStep$4(i,r,n,o,a,"throw",c)}o(void 0)})}}var BottleneckError$2,LocalDatastore,parser$3;parser$3=parser$5;BottleneckError$2=BottleneckError_1;LocalDatastore=class{constructor(t,e,r){this.instance=t,this.storeOptions=e,this.clientId=this.instance._randomIndex(),parser$3.load(r,r,this),this._nextRequest=this._lastReservoirRefresh=this._lastReservoirIncrease=Date.now(),this._running=0,this._done=0,this._unblockTime=0,this.ready=this.Promise.resolve(),this.clients={},this._startHeartbeat()}_startHeartbeat(){var t;return this.heartbeat==null&&(this.storeOptions.reservoirRefreshInterval!=null&&this.storeOptions.reservoirRefreshAmount!=null||this.storeOptions.reservoirIncreaseInterval!=null&&this.storeOptions.reservoirIncreaseAmount!=null)?typeof(t=this.heartbeat=setInterval(()=>{var e,r,n,i,o;if(i=Date.now(),this.storeOptions.reservoirRefreshInterval!=null&&i>=this._lastReservoirRefresh+this.storeOptions.reservoirRefreshInterval&&(this._lastReservoirRefresh=i,this.storeOptions.reservoir=this.storeOptions.reservoirRefreshAmount,this.instance._drainAll(this.computeCapacity())),this.storeOptions.reservoirIncreaseInterval!=null&&i>=this._lastReservoirIncrease+this.storeOptions.reservoirIncreaseInterval){var a=this.storeOptions;if(e=a.reservoirIncreaseAmount,n=a.reservoirIncreaseMaximum,o=a.reservoir,this._lastReservoirIncrease=i,r=n!=null?Math.min(e,n-o):e,r>0)return this.storeOptions.reservoir+=r,this.instance._drainAll(this.computeCapacity())}},this.heartbeatInterval)).unref=="function"?t.unref():void 0:clearInterval(this.heartbeat)}__publish__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),e.instance.Events.trigger("message",t.toString())})()}__disconnect__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),clearInterval(e.heartbeat),e.Promise.resolve()})()}yieldLoop(t=0){return new this.Promise(function(e,r){return setTimeout(e,t)})}computePenalty(){var t;return(t=this.storeOptions.penalty)!=null?t:15*this.storeOptions.minTime||5e3}__updateSettings__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),parser$3.overwrite(t,t,e.storeOptions),e._startHeartbeat(),e.instance._drainAll(e.computeCapacity()),!0})()}__running__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t._running})()}__queued__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t.instance.queued()})()}__done__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t._done})()}__groupCheck__(t){var e=this;return _asyncToGenerator$4(function*(){return yield e.yieldLoop(),e._nextRequest+e.timeout<t})()}computeCapacity(){var t,e,r=this.storeOptions;return t=r.maxConcurrent,e=r.reservoir,t!=null&&e!=null?Math.min(t-this._running,e):t!=null?t-this._running:e??null}conditionsCheck(t){var e;return e=this.computeCapacity(),e==null||t<=e}__incrementReservoir__(t){var e=this;return _asyncToGenerator$4(function*(){var r;return yield e.yieldLoop(),r=e.storeOptions.reservoir+=t,e.instance._drainAll(e.computeCapacity()),r})()}__currentReservoir__(){var t=this;return _asyncToGenerator$4(function*(){return yield t.yieldLoop(),t.storeOptions.reservoir})()}isBlocked(t){return this._unblockTime>=t}check(t,e){return this.conditionsCheck(t)&&this._nextRequest-e<=0}__check__(t){var e=this;return _asyncToGenerator$4(function*(){var r;return yield e.yieldLoop(),r=Date.now(),e.check(t,r)})()}__register__(t,e,r){var n=this;return _asyncToGenerator$4(function*(){var i,o;return yield n.yieldLoop(),i=Date.now(),n.conditionsCheck(e)?(n._running+=e,n.storeOptions.reservoir!=null&&(n.storeOptions.reservoir-=e),o=Math.max(n._nextRequest-i,0),n._nextRequest=i+o+n.storeOptions.minTime,{success:!0,wait:o,reservoir:n.storeOptions.reservoir}):{success:!1}})()}strategyIsBlock(){return this.storeOptions.strategy===3}__submit__(t,e){var r=this;return _asyncToGenerator$4(function*(){var n,i,o;if(yield r.yieldLoop(),r.storeOptions.maxConcurrent!=null&&e>r.storeOptions.maxConcurrent)throw new BottleneckError$2(`Impossible to add a job having a weight of ${e} to a limiter having a maxConcurrent setting of ${r.storeOptions.maxConcurrent}`);return i=Date.now(),o=r.storeOptions.highWater!=null&&t===r.storeOptions.highWater&&!r.check(e,i),n=r.strategyIsBlock()&&(o||r.isBlocked(i)),n&&(r._unblockTime=i+r.computePenalty(),r._nextRequest=r._unblockTime+r.storeOptions.minTime,r.instance._dropAllQueued()),{reachedHWM:o,blocked:n,strategy:r.storeOptions.strategy}})()}__free__(t,e){var r=this;return _asyncToGenerator$4(function*(){return yield r.yieldLoop(),r._running-=e,r._done+=e,r.instance._drainAll(r.computeCapacity()),{running:r._running}})()}};var LocalDatastore_1=LocalDatastore,Scripts$2={};const require$$0={"blacklist_client.lua":`local blacklist = ARGV[num_static_argv + 1]

if redis.call('zscore', client_last_seen_key, blacklist) then
  redis.call('zadd', client_last_seen_key, 0, blacklist)
end


return {}
`,"check.lua":`local weight = tonumber(ARGV[num_static_argv + 1])

local capacity = process_tick(now, false)['capacity']
local nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))

return conditions_check(capacity, weight) and nextRequest - now <= 0
`,"conditions_check.lua":`local conditions_check = function (capacity, weight)
  return capacity == nil or weight <= capacity
end
`,"current_reservoir.lua":`return process_tick(now, false)['reservoir']
`,"done.lua":`process_tick(now, false)

return tonumber(redis.call('hget', settings_key, 'done'))
`,"free.lua":`local index = ARGV[num_static_argv + 1]

redis.call('zadd', job_expirations_key, 0, index)

return process_tick(now, false)['running']
`,"get_time.lua":`redis.replicate_commands()

local get_time = function ()
  local time = redis.call('time')

  return tonumber(time[1]..string.sub(time[2], 1, 3))
end
`,"group_check.lua":`return not (redis.call('exists', settings_key) == 1)
`,"heartbeat.lua":`process_tick(now, true)
`,"increment_reservoir.lua":`local incr = tonumber(ARGV[num_static_argv + 1])

redis.call('hincrby', settings_key, 'reservoir', incr)

local reservoir = process_tick(now, true)['reservoir']

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(0, 0, groupTimeout)

return reservoir
`,"init.lua":`local clear = tonumber(ARGV[num_static_argv + 1])
local limiter_version = ARGV[num_static_argv + 2]
local num_local_argv = num_static_argv + 2

if clear == 1 then
  redis.call('del', unpack(KEYS))
end

if redis.call('exists', settings_key) == 0 then
  -- Create
  local args = {'hmset', settings_key}

  for i = num_local_argv + 1, #ARGV do
    table.insert(args, ARGV[i])
  end

  redis.call(unpack(args))
  redis.call('hmset', settings_key,
    'nextRequest', now,
    'lastReservoirRefresh', now,
    'lastReservoirIncrease', now,
    'running', 0,
    'done', 0,
    'unblockTime', 0,
    'capacityPriorityCounter', 0
  )

else
  -- Apply migrations
  local settings = redis.call('hmget', settings_key,
    'id',
    'version'
  )
  local id = settings[1]
  local current_version = settings[2]

  if current_version ~= limiter_version then
    local version_digits = {}
    for k, v in string.gmatch(current_version, "([^.]+)") do
      table.insert(version_digits, tonumber(k))
    end

    -- 2.10.0
    if version_digits[2] < 10 then
      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')
      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')
      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')
      redis.call('hsetnx', settings_key, 'done', 0)
      redis.call('hset', settings_key, 'version', '2.10.0')
    end

    -- 2.11.1
    if version_digits[2] < 11 or (version_digits[2] == 11 and version_digits[3] < 1) then
      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then
        redis.call('hmset', settings_key,
          'lastReservoirRefresh', now,
          'version', '2.11.1'
        )
      end
    end

    -- 2.14.0
    if version_digits[2] < 14 then
      local old_running_key = 'b_'..id..'_running'
      local old_executing_key = 'b_'..id..'_executing'

      if redis.call('exists', old_running_key) == 1 then
        redis.call('rename', old_running_key, job_weights_key)
      end
      if redis.call('exists', old_executing_key) == 1 then
        redis.call('rename', old_executing_key, job_expirations_key)
      end
      redis.call('hset', settings_key, 'version', '2.14.0')
    end

    -- 2.15.2
    if version_digits[2] < 15 or (version_digits[2] == 15 and version_digits[3] < 2) then
      redis.call('hsetnx', settings_key, 'capacityPriorityCounter', 0)
      redis.call('hset', settings_key, 'version', '2.15.2')
    end

    -- 2.17.0
    if version_digits[2] < 17 then
      redis.call('hsetnx', settings_key, 'clientTimeout', 10000)
      redis.call('hset', settings_key, 'version', '2.17.0')
    end

    -- 2.18.0
    if version_digits[2] < 18 then
      redis.call('hsetnx', settings_key, 'reservoirIncreaseInterval', '')
      redis.call('hsetnx', settings_key, 'reservoirIncreaseAmount', '')
      redis.call('hsetnx', settings_key, 'reservoirIncreaseMaximum', '')
      redis.call('hsetnx', settings_key, 'lastReservoirIncrease', now)
      redis.call('hset', settings_key, 'version', '2.18.0')
    end

  end

  process_tick(now, false)
end

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(0, 0, groupTimeout)

return {}
`,"process_tick.lua":`local process_tick = function (now, always_publish)

  local compute_capacity = function (maxConcurrent, running, reservoir)
    if maxConcurrent ~= nil and reservoir ~= nil then
      return math.min((maxConcurrent - running), reservoir)
    elseif maxConcurrent ~= nil then
      return maxConcurrent - running
    elseif reservoir ~= nil then
      return reservoir
    else
      return nil
    end
  end

  local settings = redis.call('hmget', settings_key,
    'id',
    'maxConcurrent',
    'running',
    'reservoir',
    'reservoirRefreshInterval',
    'reservoirRefreshAmount',
    'lastReservoirRefresh',
    'reservoirIncreaseInterval',
    'reservoirIncreaseAmount',
    'reservoirIncreaseMaximum',
    'lastReservoirIncrease',
    'capacityPriorityCounter',
    'clientTimeout'
  )
  local id = settings[1]
  local maxConcurrent = tonumber(settings[2])
  local running = tonumber(settings[3])
  local reservoir = tonumber(settings[4])
  local reservoirRefreshInterval = tonumber(settings[5])
  local reservoirRefreshAmount = tonumber(settings[6])
  local lastReservoirRefresh = tonumber(settings[7])
  local reservoirIncreaseInterval = tonumber(settings[8])
  local reservoirIncreaseAmount = tonumber(settings[9])
  local reservoirIncreaseMaximum = tonumber(settings[10])
  local lastReservoirIncrease = tonumber(settings[11])
  local capacityPriorityCounter = tonumber(settings[12])
  local clientTimeout = tonumber(settings[13])

  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)

  --
  -- Process 'running' changes
  --
  local expired = redis.call('zrangebyscore', job_expirations_key, '-inf', '('..now)

  if #expired > 0 then
    redis.call('zremrangebyscore', job_expirations_key, '-inf', '('..now)

    local flush_batch = function (batch, acc)
      local weights = redis.call('hmget', job_weights_key, unpack(batch))
                      redis.call('hdel',  job_weights_key, unpack(batch))
      local clients = redis.call('hmget', job_clients_key, unpack(batch))
                      redis.call('hdel',  job_clients_key, unpack(batch))

      -- Calculate sum of removed weights
      for i = 1, #weights do
        acc['total'] = acc['total'] + (tonumber(weights[i]) or 0)
      end

      -- Calculate sum of removed weights by client
      local client_weights = {}
      for i = 1, #clients do
        local removed = tonumber(weights[i]) or 0
        if removed > 0 then
          acc['client_weights'][clients[i]] = (acc['client_weights'][clients[i]] or 0) + removed
        end
      end
    end

    local acc = {
      ['total'] = 0,
      ['client_weights'] = {}
    }
    local batch_size = 1000

    -- Compute changes to Zsets and apply changes to Hashes
    for i = 1, #expired, batch_size do
      local batch = {}
      for j = i, math.min(i + batch_size - 1, #expired) do
        table.insert(batch, expired[j])
      end

      flush_batch(batch, acc)
    end

    -- Apply changes to Zsets
    if acc['total'] > 0 then
      redis.call('hincrby', settings_key, 'done', acc['total'])
      running = tonumber(redis.call('hincrby', settings_key, 'running', -acc['total']))
    end

    for client, weight in pairs(acc['client_weights']) do
      redis.call('zincrby', client_running_key, -weight, client)
    end
  end

  --
  -- Process 'reservoir' changes
  --
  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil
  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then
    reservoir = reservoirRefreshAmount
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'lastReservoirRefresh', now
    )
  end

  local reservoirIncreaseActive = reservoirIncreaseInterval ~= nil and reservoirIncreaseAmount ~= nil
  if reservoirIncreaseActive and now >= lastReservoirIncrease + reservoirIncreaseInterval then
    local num_intervals = math.floor((now - lastReservoirIncrease) / reservoirIncreaseInterval)
    local incr = reservoirIncreaseAmount * num_intervals
    if reservoirIncreaseMaximum ~= nil then
      incr = math.min(incr, reservoirIncreaseMaximum - (reservoir or 0))
    end
    if incr > 0 then
      reservoir = (reservoir or 0) + incr
    end
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'lastReservoirIncrease', lastReservoirIncrease + (num_intervals * reservoirIncreaseInterval)
    )
  end

  --
  -- Clear unresponsive clients
  --
  local unresponsive = redis.call('zrangebyscore', client_last_seen_key, '-inf', (now - clientTimeout))
  local unresponsive_lookup = {}
  local terminated_clients = {}
  for i = 1, #unresponsive do
    unresponsive_lookup[unresponsive[i]] = true
    if tonumber(redis.call('zscore', client_running_key, unresponsive[i])) == 0 then
      table.insert(terminated_clients, unresponsive[i])
    end
  end
  if #terminated_clients > 0 then
    redis.call('zrem', client_running_key,         unpack(terminated_clients))
    redis.call('hdel', client_num_queued_key,      unpack(terminated_clients))
    redis.call('zrem', client_last_registered_key, unpack(terminated_clients))
    redis.call('zrem', client_last_seen_key,       unpack(terminated_clients))
  end

  --
  -- Broadcast capacity changes
  --
  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)

  if always_publish or (initial_capacity ~= nil and final_capacity == nil) then
    -- always_publish or was not unlimited, now unlimited
    redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))

  elseif initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity then
    -- capacity was increased
    -- send the capacity message to the limiter having the lowest number of running jobs
    -- the tiebreaker is the limiter having not registered a job in the longest time

    local lowest_concurrency_value = nil
    local lowest_concurrency_clients = {}
    local lowest_concurrency_last_registered = {}
    local client_concurrencies = redis.call('zrange', client_running_key, 0, -1, 'withscores')

    for i = 1, #client_concurrencies, 2 do
      local client = client_concurrencies[i]
      local concurrency = tonumber(client_concurrencies[i+1])

      if (
        lowest_concurrency_value == nil or lowest_concurrency_value == concurrency
      ) and (
        not unresponsive_lookup[client]
      ) and (
        tonumber(redis.call('hget', client_num_queued_key, client)) > 0
      ) then
        lowest_concurrency_value = concurrency
        table.insert(lowest_concurrency_clients, client)
        local last_registered = tonumber(redis.call('zscore', client_last_registered_key, client))
        table.insert(lowest_concurrency_last_registered, last_registered)
      end
    end

    if #lowest_concurrency_clients > 0 then
      local position = 1
      local earliest = lowest_concurrency_last_registered[1]

      for i,v in ipairs(lowest_concurrency_last_registered) do
        if v < earliest then
          position = i
          earliest = v
        end
      end

      local next_client = lowest_concurrency_clients[position]
      redis.call('publish', 'b_'..id,
        'capacity-priority:'..(final_capacity or '')..
        ':'..next_client..
        ':'..capacityPriorityCounter
      )
      redis.call('hincrby', settings_key, 'capacityPriorityCounter', '1')
    else
      redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))
    end
  end

  return {
    ['capacity'] = final_capacity,
    ['running'] = running,
    ['reservoir'] = reservoir
  }
end
`,"queued.lua":`local clientTimeout = tonumber(redis.call('hget', settings_key, 'clientTimeout'))
local valid_clients = redis.call('zrangebyscore', client_last_seen_key, (now - clientTimeout), 'inf')
local client_queued = redis.call('hmget', client_num_queued_key, unpack(valid_clients))

local sum = 0
for i = 1, #client_queued do
  sum = sum + tonumber(client_queued[i])
end

return sum
`,"refresh_expiration.lua":`local refresh_expiration = function (now, nextRequest, groupTimeout)

  if groupTimeout ~= nil then
    local ttl = (nextRequest + groupTimeout) - now

    for i = 1, #KEYS do
      redis.call('pexpire', KEYS[i], ttl)
    end
  end

end
`,"refs.lua":`local settings_key = KEYS[1]
local job_weights_key = KEYS[2]
local job_expirations_key = KEYS[3]
local job_clients_key = KEYS[4]
local client_running_key = KEYS[5]
local client_num_queued_key = KEYS[6]
local client_last_registered_key = KEYS[7]
local client_last_seen_key = KEYS[8]

local now = tonumber(ARGV[1])
local client = ARGV[2]

local num_static_argv = 2
`,"register.lua":`local index = ARGV[num_static_argv + 1]
local weight = tonumber(ARGV[num_static_argv + 2])
local expiration = tonumber(ARGV[num_static_argv + 3])

local state = process_tick(now, false)
local capacity = state['capacity']
local reservoir = state['reservoir']

local settings = redis.call('hmget', settings_key,
  'nextRequest',
  'minTime',
  'groupTimeout'
)
local nextRequest = tonumber(settings[1])
local minTime = tonumber(settings[2])
local groupTimeout = tonumber(settings[3])

if conditions_check(capacity, weight) then

  redis.call('hincrby', settings_key, 'running', weight)
  redis.call('hset', job_weights_key, index, weight)
  if expiration ~= nil then
    redis.call('zadd', job_expirations_key, now + expiration, index)
  end
  redis.call('hset', job_clients_key, index, client)
  redis.call('zincrby', client_running_key, weight, client)
  redis.call('hincrby', client_num_queued_key, client, -1)
  redis.call('zadd', client_last_registered_key, now, client)

  local wait = math.max(nextRequest - now, 0)
  local newNextRequest = now + wait + minTime

  if reservoir == nil then
    redis.call('hset', settings_key,
      'nextRequest', newNextRequest
    )
  else
    reservoir = reservoir - weight
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'nextRequest', newNextRequest
    )
  end

  refresh_expiration(now, newNextRequest, groupTimeout)

  return {true, wait, reservoir}

else
  return {false}
end
`,"register_client.lua":`local queued = tonumber(ARGV[num_static_argv + 1])

-- Could have been re-registered concurrently
if not redis.call('zscore', client_last_seen_key, client) then
  redis.call('zadd', client_running_key, 0, client)
  redis.call('hset', client_num_queued_key, client, queued)
  redis.call('zadd', client_last_registered_key, 0, client)
end

redis.call('zadd', client_last_seen_key, now, client)

return {}
`,"running.lua":`return process_tick(now, false)['running']
`,"submit.lua":`local queueLength = tonumber(ARGV[num_static_argv + 1])
local weight = tonumber(ARGV[num_static_argv + 2])

local capacity = process_tick(now, false)['capacity']

local settings = redis.call('hmget', settings_key,
  'id',
  'maxConcurrent',
  'highWater',
  'nextRequest',
  'strategy',
  'unblockTime',
  'penalty',
  'minTime',
  'groupTimeout'
)
local id = settings[1]
local maxConcurrent = tonumber(settings[2])
local highWater = tonumber(settings[3])
local nextRequest = tonumber(settings[4])
local strategy = tonumber(settings[5])
local unblockTime = tonumber(settings[6])
local penalty = tonumber(settings[7])
local minTime = tonumber(settings[8])
local groupTimeout = tonumber(settings[9])

if maxConcurrent ~= nil and weight > maxConcurrent then
  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)
end

local reachedHWM = (highWater ~= nil and queueLength == highWater
  and not (
    conditions_check(capacity, weight)
    and nextRequest - now <= 0
  )
)

local blocked = strategy == 3 and (reachedHWM or unblockTime >= now)

if blocked then
  local computedPenalty = penalty
  if computedPenalty == nil then
    if minTime == 0 then
      computedPenalty = 5000
    else
      computedPenalty = 15 * minTime
    end
  end

  local newNextRequest = now + computedPenalty + minTime

  redis.call('hmset', settings_key,
    'unblockTime', now + computedPenalty,
    'nextRequest', newNextRequest
  )

  local clients_queued_reset = redis.call('hkeys', client_num_queued_key)
  local queued_reset = {}
  for i = 1, #clients_queued_reset do
    table.insert(queued_reset, clients_queued_reset[i])
    table.insert(queued_reset, 0)
  end
  redis.call('hmset', client_num_queued_key, unpack(queued_reset))

  redis.call('publish', 'b_'..id, 'blocked:')

  refresh_expiration(now, newNextRequest, groupTimeout)
end

if not blocked and not reachedHWM then
  redis.call('hincrby', client_num_queued_key, client, 1)
end

return {reachedHWM, blocked, strategy}
`,"update_settings.lua":`local args = {'hmset', settings_key}

for i = num_static_argv + 1, #ARGV do
  table.insert(args, ARGV[i])
end

redis.call(unpack(args))

process_tick(now, true)

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(0, 0, groupTimeout)

return {}
`,"validate_client.lua":`if not redis.call('zscore', client_last_seen_key, client) then
  return redis.error_reply('UNKNOWN_CLIENT')
end

redis.call('zadd', client_last_seen_key, now, client)
`,"validate_keys.lua":`if not (redis.call('exists', settings_key) == 1) then
  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')
end
`};(function(s){var t,e,r;e=require$$0,t={refs:e["refs.lua"],validate_keys:e["validate_keys.lua"],validate_client:e["validate_client.lua"],refresh_expiration:e["refresh_expiration.lua"],process_tick:e["process_tick.lua"],conditions_check:e["conditions_check.lua"],get_time:e["get_time.lua"]},s.allKeys=function(n){return[`b_${n}_settings`,`b_${n}_job_weights`,`b_${n}_job_expirations`,`b_${n}_job_clients`,`b_${n}_client_running`,`b_${n}_client_num_queued`,`b_${n}_client_last_registered`,`b_${n}_client_last_seen`]},r={init:{keys:s.allKeys,headers:["process_tick"],refresh_expiration:!0,code:e["init.lua"]},group_check:{keys:s.allKeys,headers:[],refresh_expiration:!1,code:e["group_check.lua"]},register_client:{keys:s.allKeys,headers:["validate_keys"],refresh_expiration:!1,code:e["register_client.lua"]},blacklist_client:{keys:s.allKeys,headers:["validate_keys","validate_client"],refresh_expiration:!1,code:e["blacklist_client.lua"]},heartbeat:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["heartbeat.lua"]},update_settings:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:e["update_settings.lua"]},running:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["running.lua"]},queued:{keys:s.allKeys,headers:["validate_keys","validate_client"],refresh_expiration:!1,code:e["queued.lua"]},done:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["done.lua"]},check:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!1,code:e["check.lua"]},submit:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!0,code:e["submit.lua"]},register:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!0,code:e["register.lua"]},free:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:e["free.lua"]},current_reservoir:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:e["current_reservoir.lua"]},increment_reservoir:{keys:s.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:e["increment_reservoir.lua"]}},s.names=Object.keys(r),s.keys=function(n,i){return r[n].keys(i)},s.payload=function(n){var i;return i=r[n],Array.prototype.concat(t.refs,i.headers.map(function(o){return t[o]}),i.refresh_expiration?t.refresh_expiration:"",i.code).join(`
`)}})(Scripts$2);function asyncGeneratorStep$3(s,t,e,r,n,i,o){try{var a=s[i](o),c=a.value}catch(f){e(f);return}a.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator$3(s){return function(){var t=this,e=arguments;return new Promise(function(r,n){var i=s.apply(t,e);function o(c){asyncGeneratorStep$3(i,r,n,o,a,"next",c)}function a(c){asyncGeneratorStep$3(i,r,n,o,a,"throw",c)}o(void 0)})}}var Events$1,RedisConnection$1,Scripts$1,parser$2;parser$2=parser$5;Events$1=Events_1;Scripts$1=Scripts$2;RedisConnection$1=(function(){class RedisConnection{constructor(options={}){parser$2.load(options,this.defaults,this),this.Redis==null&&(this.Redis=eval("require")("redis")),this.Events==null&&(this.Events=new Events$1(this)),this.terminated=!1,this.client==null&&(this.client=this.Redis.createClient(this.clientOptions)),this.subscriber=this.client.duplicate(),this.limiters={},this.shas={},this.ready=this.Promise.all([this._setup(this.client,!1),this._setup(this.subscriber,!0)]).then(()=>this._loadScripts()).then(()=>({client:this.client,subscriber:this.subscriber}))}_setup(s,t){return s.setMaxListeners(0),new this.Promise((e,r)=>(s.on("error",n=>this.Events.trigger("error",n)),t&&s.on("message",(n,i)=>{var o;return(o=this.limiters[n])!=null?o._store.onMessage(n,i):void 0}),s.ready?e():s.once("ready",e)))}_loadScript(s){return new this.Promise((t,e)=>{var r;return r=Scripts$1.payload(s),this.client.multi([["script","load",r]]).exec((n,i)=>n!=null?e(n):(this.shas[s]=i[0],t(i[0])))})}_loadScripts(){return this.Promise.all(Scripts$1.names.map(s=>this._loadScript(s)))}__runCommand__(s){var t=this;return _asyncToGenerator$3(function*(){return yield t.ready,new t.Promise((e,r)=>t.client.multi([s]).exec_atomic(function(n,i){return n!=null?r(n):e(i[0])}))})()}__addLimiter__(s){return this.Promise.all([s.channel(),s.channel_client()].map(t=>new this.Promise((e,r)=>{var n;return n=i=>{if(i===t)return this.subscriber.removeListener("subscribe",n),this.limiters[t]=s,e()},this.subscriber.on("subscribe",n),this.subscriber.subscribe(t)})))}__removeLimiter__(s){var t=this;return this.Promise.all([s.channel(),s.channel_client()].map(function(){var e=_asyncToGenerator$3(function*(r){return t.terminated||(yield new t.Promise((n,i)=>t.subscriber.unsubscribe(r,function(o,a){if(o!=null)return i(o);if(a===r)return n()}))),delete t.limiters[r]});return function(r){return e.apply(this,arguments)}}()))}__scriptArgs__(s,t,e,r){var n;return n=Scripts$1.keys(s,t),[this.shas[s],n.length].concat(n,e,r)}__scriptFn__(s){return this.client.evalsha.bind(this.client)}disconnect(s=!0){var t,e,r,n;for(n=Object.keys(this.limiters),t=0,r=n.length;t<r;t++)e=n[t],clearInterval(this.limiters[e]._store.heartbeat);return this.limiters={},this.terminated=!0,this.client.end(s),this.subscriber.end(s),this.Promise.resolve()}}return RedisConnection.prototype.datastore="redis",RedisConnection.prototype.defaults={Redis:null,clientOptions:{},client:null,Promise,Events:null},RedisConnection}).call(void 0);var RedisConnection_1=RedisConnection$1;function _slicedToArray$1(s,t){return _arrayWithHoles$1(s)||_iterableToArrayLimit$1(s,t)||_nonIterableRest$1()}function _nonIterableRest$1(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit$1(s,t){var e=[],r=!0,n=!1,i=void 0;try{for(var o=s[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(e.push(a.value),!(t&&e.length===t));r=!0);}catch(c){n=!0,i=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(n)throw i}}return e}function _arrayWithHoles$1(s){if(Array.isArray(s))return s}function asyncGeneratorStep$2(s,t,e,r,n,i,o){try{var a=s[i](o),c=a.value}catch(f){e(f);return}a.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator$2(s){return function(){var t=this,e=arguments;return new Promise(function(r,n){var i=s.apply(t,e);function o(c){asyncGeneratorStep$2(i,r,n,o,a,"next",c)}function a(c){asyncGeneratorStep$2(i,r,n,o,a,"throw",c)}o(void 0)})}}var Events,IORedisConnection$1,Scripts,parser$1;parser$1=parser$5;Events=Events_1;Scripts=Scripts$2;IORedisConnection$1=(function(){class IORedisConnection{constructor(options={}){parser$1.load(options,this.defaults,this),this.Redis==null&&(this.Redis=eval("require")("ioredis")),this.Events==null&&(this.Events=new Events(this)),this.terminated=!1,this.clusterNodes!=null?(this.client=new this.Redis.Cluster(this.clusterNodes,this.clientOptions),this.subscriber=new this.Redis.Cluster(this.clusterNodes,this.clientOptions)):this.client!=null&&this.client.duplicate==null?this.subscriber=new this.Redis.Cluster(this.client.startupNodes,this.client.options):(this.client==null&&(this.client=new this.Redis(this.clientOptions)),this.subscriber=this.client.duplicate()),this.limiters={},this.ready=this.Promise.all([this._setup(this.client,!1),this._setup(this.subscriber,!0)]).then(()=>(this._loadScripts(),{client:this.client,subscriber:this.subscriber}))}_setup(s,t){return s.setMaxListeners(0),new this.Promise((e,r)=>(s.on("error",n=>this.Events.trigger("error",n)),t&&s.on("message",(n,i)=>{var o;return(o=this.limiters[n])!=null?o._store.onMessage(n,i):void 0}),s.status==="ready"?e():s.once("ready",e)))}_loadScripts(){return Scripts.names.forEach(s=>this.client.defineCommand(s,{lua:Scripts.payload(s)}))}__runCommand__(s){var t=this;return _asyncToGenerator$2(function*(){var e;yield t.ready;var r=yield t.client.pipeline([s]).exec(),n=_slicedToArray$1(r,1),i=_slicedToArray$1(n[0],2);return i[0],e=i[1],e})()}__addLimiter__(s){return this.Promise.all([s.channel(),s.channel_client()].map(t=>new this.Promise((e,r)=>this.subscriber.subscribe(t,()=>(this.limiters[t]=s,e())))))}__removeLimiter__(s){var t=this;return[s.channel(),s.channel_client()].forEach(function(){var e=_asyncToGenerator$2(function*(r){return t.terminated||(yield t.subscriber.unsubscribe(r)),delete t.limiters[r]});return function(r){return e.apply(this,arguments)}}())}__scriptArgs__(s,t,e,r){var n;return n=Scripts.keys(s,t),[n.length].concat(n,e,r)}__scriptFn__(s){return this.client[s].bind(this.client)}disconnect(s=!0){var t,e,r,n;for(n=Object.keys(this.limiters),t=0,r=n.length;t<r;t++)e=n[t],clearInterval(this.limiters[e]._store.heartbeat);return this.limiters={},this.terminated=!0,s?this.Promise.all([this.client.quit(),this.subscriber.quit()]):(this.client.disconnect(),this.subscriber.disconnect(),this.Promise.resolve())}}return IORedisConnection.prototype.datastore="ioredis",IORedisConnection.prototype.defaults={Redis:null,clientOptions:{},clusterNodes:null,client:null,Promise,Events:null},IORedisConnection}).call(void 0);var IORedisConnection_1=IORedisConnection$1;function _slicedToArray(s,t){return _arrayWithHoles(s)||_iterableToArrayLimit(s,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(s,t){var e=[],r=!0,n=!1,i=void 0;try{for(var o=s[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(e.push(a.value),!(t&&e.length===t));r=!0);}catch(c){n=!0,i=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(n)throw i}}return e}function _arrayWithHoles(s){if(Array.isArray(s))return s}function asyncGeneratorStep$1(s,t,e,r,n,i,o){try{var a=s[i](o),c=a.value}catch(f){e(f);return}a.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator$1(s){return function(){var t=this,e=arguments;return new Promise(function(r,n){var i=s.apply(t,e);function o(c){asyncGeneratorStep$1(i,r,n,o,a,"next",c)}function a(c){asyncGeneratorStep$1(i,r,n,o,a,"throw",c)}o(void 0)})}}var BottleneckError$1,IORedisConnection,RedisConnection,RedisDatastore,parser;parser=parser$5;BottleneckError$1=BottleneckError_1;RedisConnection=RedisConnection_1;IORedisConnection=IORedisConnection_1;RedisDatastore=class{constructor(t,e,r){this.instance=t,this.storeOptions=e,this.originalId=this.instance.id,this.clientId=this.instance._randomIndex(),parser.load(r,r,this),this.clients={},this.capacityPriorityCounters={},this.sharedConnection=this.connection!=null,this.connection==null&&(this.connection=this.instance.datastore==="redis"?new RedisConnection({Redis:this.Redis,clientOptions:this.clientOptions,Promise:this.Promise,Events:this.instance.Events}):this.instance.datastore==="ioredis"?new IORedisConnection({Redis:this.Redis,clientOptions:this.clientOptions,clusterNodes:this.clusterNodes,Promise:this.Promise,Events:this.instance.Events}):void 0),this.instance.connection=this.connection,this.instance.datastore=this.connection.datastore,this.ready=this.connection.ready.then(n=>(this.clients=n,this.runScript("init",this.prepareInitSettings(this.clearDatastore)))).then(()=>this.connection.__addLimiter__(this.instance)).then(()=>this.runScript("register_client",[this.instance.queued()])).then(()=>{var n;return typeof(n=this.heartbeat=setInterval(()=>this.runScript("heartbeat",[]).catch(i=>this.instance.Events.trigger("error",i)),this.heartbeatInterval)).unref=="function"&&n.unref(),this.clients})}__publish__(t){var e=this;return _asyncToGenerator$1(function*(){var r,n=yield e.ready;return r=n.client,r.publish(e.instance.channel(),`message:${t.toString()}`)})()}onMessage(t,e){var r=this;return _asyncToGenerator$1(function*(){var n,i,o,a,c,f,E,T,w,x;try{E=e.indexOf(":");var v=[e.slice(0,E),e.slice(E+1)];if(x=v[0],o=v[1],x==="capacity")return yield r.instance._drainAll(o.length>0?~~o:void 0);if(x==="capacity-priority"){var m=o.split(":"),b=_slicedToArray(m,3);return w=b[0],T=b[1],i=b[2],n=w.length>0?~~w:void 0,T===r.clientId?(a=yield r.instance._drainAll(n),f=n!=null?n-(a||0):"",yield r.clients.client.publish(r.instance.channel(),`capacity-priority:${f}::${i}`)):T===""?(clearTimeout(r.capacityPriorityCounters[i]),delete r.capacityPriorityCounters[i],r.instance._drainAll(n)):r.capacityPriorityCounters[i]=setTimeout(_asyncToGenerator$1(function*(){var g;try{return delete r.capacityPriorityCounters[i],yield r.runScript("blacklist_client",[T]),yield r.instance._drainAll(n)}catch(k){return g=k,r.instance.Events.trigger("error",g)}}),1e3)}else{if(x==="message")return r.instance.Events.trigger("message",o);if(x==="blocked")return yield r.instance._dropAllQueued()}}catch(g){return c=g,r.instance.Events.trigger("error",c)}})()}__disconnect__(t){return clearInterval(this.heartbeat),this.sharedConnection?this.connection.__removeLimiter__(this.instance):this.connection.disconnect(t)}runScript(t,e){var r=this;return _asyncToGenerator$1(function*(){return t==="init"||t==="register_client"||(yield r.ready),new r.Promise((n,i)=>{var o,a;return o=[Date.now(),r.clientId].concat(e),r.instance.Events.trigger("debug",`Calling Redis script: ${t}.lua`,o),a=r.connection.__scriptArgs__(t,r.originalId,o,function(c,f){return c!=null?i(c):n(f)}),r.connection.__scriptFn__(t)(...a)}).catch(n=>n.message==="SETTINGS_KEY_NOT_FOUND"?t==="heartbeat"?r.Promise.resolve():r.runScript("init",r.prepareInitSettings(!1)).then(()=>r.runScript(t,e)):n.message==="UNKNOWN_CLIENT"?r.runScript("register_client",[r.instance.queued()]).then(()=>r.runScript(t,e)):r.Promise.reject(n))})()}prepareArray(t){var e,r,n,i;for(n=[],e=0,r=t.length;e<r;e++)i=t[e],n.push(i!=null?i.toString():"");return n}prepareObject(t){var e,r,n;e=[];for(r in t)n=t[r],e.push(r,n!=null?n.toString():"");return e}prepareInitSettings(t){var e;return e=this.prepareObject(Object.assign({},this.storeOptions,{id:this.originalId,version:this.instance.version,groupTimeout:this.timeout,clientTimeout:this.clientTimeout})),e.unshift(t?1:0,this.instance.version),e}convertBool(t){return!!t}__updateSettings__(t){var e=this;return _asyncToGenerator$1(function*(){return yield e.runScript("update_settings",e.prepareObject(t)),parser.overwrite(t,t,e.storeOptions)})()}__running__(){return this.runScript("running",[])}__queued__(){return this.runScript("queued",[])}__done__(){return this.runScript("done",[])}__groupCheck__(){var t=this;return _asyncToGenerator$1(function*(){return t.convertBool(yield t.runScript("group_check",[]))})()}__incrementReservoir__(t){return this.runScript("increment_reservoir",[t])}__currentReservoir__(){return this.runScript("current_reservoir",[])}__check__(t){var e=this;return _asyncToGenerator$1(function*(){return e.convertBool(yield e.runScript("check",e.prepareArray([t])))})()}__register__(t,e,r){var n=this;return _asyncToGenerator$1(function*(){var i,o,a,c=yield n.runScript("register",n.prepareArray([t,e,r])),f=_slicedToArray(c,3);return o=f[0],a=f[1],i=f[2],{success:n.convertBool(o),wait:a,reservoir:i}})()}__submit__(t,e){var r=this;return _asyncToGenerator$1(function*(){var n,i,o,a,c;try{var f=yield r.runScript("submit",r.prepareArray([t,e])),E=_slicedToArray(f,3);return a=E[0],n=E[1],c=E[2],{reachedHWM:r.convertBool(a),blocked:r.convertBool(n),strategy:c}}catch(x){if(i=x,i.message.indexOf("OVERWEIGHT")===0){var T=i.message.split(":"),w=_slicedToArray(T,3);throw w[0],e=w[1],o=w[2],new BottleneckError$1(`Impossible to add a job having a weight of ${e} to a limiter having a maxConcurrent setting of ${o}`)}else throw i}})()}__free__(t,e){var r=this;return _asyncToGenerator$1(function*(){var n;return n=yield r.runScript("free",r.prepareArray([t])),{running:n}})()}};var RedisDatastore_1=RedisDatastore,BottleneckError,States;BottleneckError=BottleneckError_1;States=class{constructor(t){this.status=t,this._jobs={},this.counts=this.status.map(function(){return 0})}next(t){var e,r;if(e=this._jobs[t],r=e+1,e!=null&&r<this.status.length)return this.counts[e]--,this.counts[r]++,this._jobs[t]++;if(e!=null)return this.counts[e]--,delete this._jobs[t]}start(t){var e;return e=0,this._jobs[t]=e,this.counts[e]++}remove(t){var e;return e=this._jobs[t],e!=null&&(this.counts[e]--,delete this._jobs[t]),e!=null}jobStatus(t){var e;return(e=this.status[this._jobs[t]])!=null?e:null}statusJobs(t){var e,r,n,i,o;if(t!=null){if(r=this.status.indexOf(t),r<0)throw new BottleneckError(`status must be one of ${this.status.join(", ")}`);n=this._jobs,i=[];for(e in n)o=n[e],o===r&&i.push(e);return i}else return Object.keys(this._jobs)}statusCounts(){return this.counts.reduce((t,e,r)=>(t[this.status[r]]=e,t),{})}};var States_1=States;function asyncGeneratorStep(s,t,e,r,n,i,o){try{var a=s[i](o),c=a.value}catch(f){e(f);return}a.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator(s){return function(){var t=this,e=arguments;return new Promise(function(r,n){var i=s.apply(t,e);function o(c){asyncGeneratorStep(i,r,n,o,a,"next",c)}function a(c){asyncGeneratorStep(i,r,n,o,a,"throw",c)}o(void 0)})}}var DLList,Sync;DLList=DLList_1;Sync=class{constructor(t,e){this.schedule=this.schedule.bind(this),this.name=t,this.Promise=e,this._running=0,this._queue=new DLList}isEmpty(){return this._queue.length===0}_tryToRun(){var t=this;return _asyncToGenerator(function*(){var e,r,n,i,o,a,c;if(t._running<1&&t._queue.length>0){t._running++;var f=t._queue.shift();return c=f.task,e=f.args,o=f.resolve,i=f.reject,r=yield _asyncToGenerator(function*(){try{return a=yield c(...e),function(){return o(a)}}catch(E){return n=E,function(){return i(n)}}})(),t._running--,t._tryToRun(),r()}})()}schedule(t,...e){var r,n,i;return i=n=null,r=new this.Promise(function(o,a){return i=o,n=a}),this._queue.push({task:t,args:e,resolve:i,reject:n}),this._tryToRun(),r}};var Sync_1=Sync;const version="2.19.5",require$$8={version};var Group_1,hasRequiredGroup;function requireGroup(){if(hasRequiredGroup)return Group_1;hasRequiredGroup=1;function s(w,x){return r(w)||e(w,x)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(w,x){var v=[],m=!0,b=!1,g=void 0;try{for(var k=w[Symbol.iterator](),I;!(m=(I=k.next()).done)&&(v.push(I.value),!(x&&v.length===x));m=!0);}catch(u){b=!0,g=u}finally{try{!m&&k.return!=null&&k.return()}finally{if(b)throw g}}return v}function r(w){if(Array.isArray(w))return w}function n(w,x,v,m,b,g,k){try{var I=w[g](k),u=I.value}catch(S){v(S);return}I.done?x(u):Promise.resolve(u).then(m,b)}function i(w){return function(){var x=this,v=arguments;return new Promise(function(m,b){var g=w.apply(x,v);function k(u){n(g,m,b,k,I,"next",u)}function I(u){n(g,m,b,k,I,"throw",u)}k(void 0)})}}var o,a,c,f,E,T;return T=parser$5,o=Events_1,f=RedisConnection_1,c=IORedisConnection_1,E=Scripts$2,a=(function(){class w{constructor(v={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=v,T.load(this.limiterOptions,this.defaults,this),this.Events=new o(this),this.instances={},this.Bottleneck=requireBottleneck(),this._startAutoCleanup(),this.sharedConnection=this.connection!=null,this.connection==null&&(this.limiterOptions.datastore==="redis"?this.connection=new f(Object.assign({},this.limiterOptions,{Events:this.Events})):this.limiterOptions.datastore==="ioredis"&&(this.connection=new c(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(v=""){var m;return(m=this.instances[v])!=null?m:(()=>{var b;return b=this.instances[v]=new this.Bottleneck(Object.assign(this.limiterOptions,{id:`${this.id}-${v}`,timeout:this.timeout,connection:this.connection})),this.Events.trigger("created",b,v),b})()}deleteKey(v=""){var m=this;return i(function*(){var b,g;return g=m.instances[v],m.connection&&(b=yield m.connection.__runCommand__(["del",...E.allKeys(`${m.id}-${v}`)])),g!=null&&(delete m.instances[v],yield g.disconnect()),g!=null||b>0})()}limiters(){var v,m,b,g;m=this.instances,b=[];for(v in m)g=m[v],b.push({key:v,limiter:g});return b}keys(){return Object.keys(this.instances)}clusterKeys(){var v=this;return i(function*(){var m,b,g,k,I,u,S,l,h;if(v.connection==null)return v.Promise.resolve(v.keys());for(u=[],m=null,h=`b_${v.id}-`.length,b=9;m!==0;){var d=yield v.connection.__runCommand__(["scan",m??0,"match",`b_${v.id}-*_settings`,"count",1e4]),p=s(d,2);for(l=p[0],g=p[1],m=~~l,k=0,S=g.length;k<S;k++)I=g[k],u.push(I.slice(h,-b))}return u})()}_startAutoCleanup(){var v=this,m;return clearInterval(this.interval),typeof(m=this.interval=setInterval(i(function*(){var b,g,k,I,u,S;u=Date.now(),k=v.instances,I=[];for(g in k){S=k[g];try{(yield S._store.__groupCheck__(u))?I.push(v.deleteKey(g)):I.push(void 0)}catch(l){b=l,I.push(S.Events.trigger("error",b))}}return I}),this.timeout/2)).unref=="function"?m.unref():void 0}updateSettings(v={}){if(T.overwrite(v,this.defaults,this),T.overwrite(v,v,this.limiterOptions),v.timeout!=null)return this._startAutoCleanup()}disconnect(v=!0){var m;if(!this.sharedConnection)return(m=this.connection)!=null?m.disconnect(v):void 0}}return w.prototype.defaults={timeout:1e3*60*5,connection:null,Promise,id:"group-key"},w}).call(void 0),Group_1=a,Group_1}var Batcher_1,hasRequiredBatcher;function requireBatcher(){if(hasRequiredBatcher)return Batcher_1;hasRequiredBatcher=1;var s,t,e;return e=parser$5,t=Events_1,s=(function(){class r{constructor(i={}){this.options=i,e.load(this.options,this.defaults,this),this.Events=new t(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((i,o)=>this._resolve=i)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(i){var o;return this._arr.push(i),o=this._promise,this._arr.length===this.maxSize?this._flush():this.maxTime!=null&&this._arr.length===1&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),o}}return r.prototype.defaults={maxTime:null,maxSize:null,Promise},r}).call(void 0),Batcher_1=s,Batcher_1}var Bottleneck_1,hasRequiredBottleneck;function requireBottleneck(){if(hasRequiredBottleneck)return Bottleneck_1;hasRequiredBottleneck=1;function s(u,S){return i(u)||t(u,S)||r()}function t(u,S){var l=[],h=!0,d=!1,p=void 0;try{for(var _=u[Symbol.iterator](),y;!(h=(y=_.next()).done)&&(l.push(y.value),!(S&&l.length===S));h=!0);}catch(R){d=!0,p=R}finally{try{!h&&_.return!=null&&_.return()}finally{if(d)throw p}}return l}function e(u){return i(u)||n(u)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(u){if(Symbol.iterator in Object(u)||Object.prototype.toString.call(u)==="[object Arguments]")return Array.from(u)}function i(u){if(Array.isArray(u))return u}function o(u,S,l,h,d,p,_){try{var y=u[p](_),R=y.value}catch($){l($);return}y.done?S(R):Promise.resolve(R).then(h,d)}function a(u){return function(){var S=this,l=arguments;return new Promise(function(h,d){var p=u.apply(S,l);function _(R){o(p,h,d,_,y,"next",R)}function y(R){o(p,h,d,_,y,"throw",R)}_(void 0)})}}var c,f,E,T,w,x,v,m,b,g,k,I=[].splice;return x=10,f=5,k=parser$5,v=Queues_1,T=Job_1,w=LocalDatastore_1,m=RedisDatastore_1,E=Events_1,b=States_1,g=Sync_1,c=(function(){class u{constructor(l={},...h){var d,p;this._addToQueue=this._addToQueue.bind(this),this._validateOptions(l,h),k.load(l,this.instanceDefaults,this),this._queues=new v(x),this._scheduled={},this._states=new b(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new E(this),this._submitLock=new g("submit",this.Promise),this._registerLock=new g("register",this.Promise),p=k.load(l,this.storeDefaults,{}),this._store=(function(){if(this.datastore==="redis"||this.datastore==="ioredis"||this.connection!=null)return d=k.load(l,this.redisStoreDefaults,{}),new m(this,p,d);if(this.datastore==="local")return d=k.load(l,this.localStoreDefaults,{}),new w(this,p,d);throw new u.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`)}).call(this),this._queues.on("leftzero",()=>{var _;return(_=this._store.heartbeat)!=null&&typeof _.ref=="function"?_.ref():void 0}),this._queues.on("zero",()=>{var _;return(_=this._store.heartbeat)!=null&&typeof _.unref=="function"?_.unref():void 0})}_validateOptions(l,h){if(!(l!=null&&typeof l=="object"&&h.length===0))throw new u.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.")}ready(){return this._store.ready}clients(){return this._store.clients}channel(){return`b_${this.id}`}channel_client(){return`b_${this.id}_${this._store.clientId}`}publish(l){return this._store.__publish__(l)}disconnect(l=!0){return this._store.__disconnect__(l)}chain(l){return this._limiter=l,this}queued(l){return this._queues.queued(l)}clusterQueued(){return this._store.__queued__()}empty(){return this.queued()===0&&this._submitLock.isEmpty()}running(){return this._store.__running__()}done(){return this._store.__done__()}jobStatus(l){return this._states.jobStatus(l)}jobs(l){return this._states.statusJobs(l)}counts(){return this._states.statusCounts()}_randomIndex(){return Math.random().toString(36).slice(2)}check(l=1){return this._store.__check__(l)}_clearGlobalState(l){return this._scheduled[l]!=null?(clearTimeout(this._scheduled[l].expiration),delete this._scheduled[l],!0):!1}_free(l,h,d,p){var _=this;return a(function*(){var y,R;try{var $=yield _._store.__free__(l,d.weight);if(R=$.running,_.Events.trigger("debug",`Freed ${d.id}`,p),R===0&&_.empty())return _.Events.trigger("idle")}catch(C){return y=C,_.Events.trigger("error",y)}})()}_run(l,h,d){var p,_,y;return h.doRun(),p=this._clearGlobalState.bind(this,l),y=this._run.bind(this,l,h),_=this._free.bind(this,l,h),this._scheduled[l]={timeout:setTimeout(()=>h.doExecute(this._limiter,p,y,_),d),expiration:h.options.expiration!=null?setTimeout(function(){return h.doExpire(p,y,_)},d+h.options.expiration):void 0,job:h}}_drainOne(l){return this._registerLock.schedule(()=>{var h,d,p,_,y;if(this.queued()===0)return this.Promise.resolve(null);y=this._queues.getFirst();var R=p=y.first();return _=R.options,h=R.args,l!=null&&_.weight>l?this.Promise.resolve(null):(this.Events.trigger("debug",`Draining ${_.id}`,{args:h,options:_}),d=this._randomIndex(),this._store.__register__(d,_.weight,_.expiration).then(({success:$,wait:C,reservoir:O})=>{var A;return this.Events.trigger("debug",`Drained ${_.id}`,{success:$,args:h,options:_}),$?(y.shift(),A=this.empty(),A&&this.Events.trigger("empty"),O===0&&this.Events.trigger("depleted",A),this._run(d,p,C),this.Promise.resolve(_.weight)):this.Promise.resolve(null)}))})}_drainAll(l,h=0){return this._drainOne(l).then(d=>{var p;return d!=null?(p=l!=null?l-d:l,this._drainAll(p,h+d)):this.Promise.resolve(h)}).catch(d=>this.Events.trigger("error",d))}_dropAllQueued(l){return this._queues.shiftAll(function(h){return h.doDrop({message:l})})}stop(l={}){var h,d;return l=k.load(l,this.stopDefaults),d=p=>{var _;return _=()=>{var y;return y=this._states.counts,y[0]+y[1]+y[2]+y[3]===p},new this.Promise((y,R)=>_()?y():this.on("done",()=>{if(_())return this.removeAllListeners("done"),y()}))},h=l.dropWaitingJobs?(this._run=function(p,_){return _.doDrop({message:l.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var p,_,y;_=this._scheduled;for(p in _)y=_[p],this.jobStatus(y.job.options.id)==="RUNNING"&&(clearTimeout(y.timeout),clearTimeout(y.expiration),y.job.doDrop({message:l.dropErrorMessage}));return this._dropAllQueued(l.dropErrorMessage),d(0)}))):this.schedule({priority:x-1,weight:0},()=>d(1)),this._receive=function(p){return p._reject(new u.prototype.BottleneckError(l.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new u.prototype.BottleneckError("stop() has already been called")),h}_addToQueue(l){var h=this;return a(function*(){var d,p,_,y,R,$,C;d=l.args,y=l.options;try{var O=yield h._store.__submit__(h.queued(),y.weight);R=O.reachedHWM,p=O.blocked,C=O.strategy}catch(A){return _=A,h.Events.trigger("debug",`Could not queue ${y.id}`,{args:d,options:y,error:_}),l.doDrop({error:_}),!1}return p?(l.doDrop(),!0):R&&($=C===u.prototype.strategy.LEAK?h._queues.shiftLastFrom(y.priority):C===u.prototype.strategy.OVERFLOW_PRIORITY?h._queues.shiftLastFrom(y.priority+1):C===u.prototype.strategy.OVERFLOW?l:void 0,$!=null&&$.doDrop(),$==null||C===u.prototype.strategy.OVERFLOW)?($==null&&l.doDrop(),R):(l.doQueue(R,p),h._queues.push(l),yield h._drainAll(),R)})()}_receive(l){return this._states.jobStatus(l.options.id)!=null?(l._reject(new u.prototype.BottleneckError(`A job with the same id already exists (id=${l.options.id})`)),!1):(l.doReceive(),this._submitLock.schedule(this._addToQueue,l))}submit(...l){var h,d,p,_,y,R,$;if(typeof l[0]=="function"){var C,O,A,D;y=l,C=y,O=e(C),d=O[0],l=O.slice(1),A=I.call(l,-1),D=s(A,1),h=D[0],_=k.load({},this.jobDefaults)}else{var q,G,L,j;R=l,q=R,G=e(q),_=G[0],d=G[1],l=G.slice(2),L=I.call(l,-1),j=s(L,1),h=j[0],_=k.load(_,this.jobDefaults)}return $=(...P)=>new this.Promise(function(N,K){return d(...P,function(...B){return(B[0]!=null?K:N)(B)})}),p=new T($,l,_,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),p.promise.then(function(P){return typeof h=="function"?h(...P):void 0}).catch(function(P){return Array.isArray(P)?typeof h=="function"?h(...P):void 0:typeof h=="function"?h(P):void 0}),this._receive(p)}schedule(...l){var h,d,p;if(typeof l[0]=="function"){var _=l,y=e(_);p=y[0],l=y.slice(1),d={}}else{var R=l,$=e(R);d=$[0],p=$[1],l=$.slice(2)}return h=new T(p,l,d,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(h),h.promise}wrap(l){var h,d;return h=this.schedule.bind(this),d=function(..._){return h(l.bind(this),..._)},d.withOptions=function(p,..._){return h(p,l,..._)},d}updateSettings(l={}){var h=this;return a(function*(){return yield h._store.__updateSettings__(k.overwrite(l,h.storeDefaults)),k.overwrite(l,h.instanceDefaults,h),h})()}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(l=0){return this._store.__incrementReservoir__(l)}}return u.default=u,u.Events=E,u.version=u.prototype.version=require$$8.version,u.strategy=u.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},u.BottleneckError=u.prototype.BottleneckError=BottleneckError_1,u.Group=u.prototype.Group=requireGroup(),u.RedisConnection=u.prototype.RedisConnection=RedisConnection_1,u.IORedisConnection=u.prototype.IORedisConnection=IORedisConnection_1,u.Batcher=u.prototype.Batcher=requireBatcher(),u.prototype.jobDefaults={priority:f,weight:1,expiration:null,id:"<no-id>"},u.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:u.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},u.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},u.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},u.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},u.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},u}).call(void 0),Bottleneck_1=c,Bottleneck_1}var lib=requireBottleneck();const Bottleneck=getDefaultExportFromCjs(lib),addressCache={},limiter=new Bottleneck({minTime:60,maxConcurrent:10}),forwardGeocode=limiter.wrap(async s=>{if(addressCache[s])return addressCache[s];const t=s.replace(/;/g,"");try{const r=`https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(t)}`,n=await axios.get(r,{params:{access_token:"pk.eyJ1IjoidGltLXZlemEiLCJhIjoiY2x6OHNmYm53MDQ1aTJpcHQwNWZmdDhpdyJ9.3NO3QKSHwdVLYZn8WWv73A",limit:1,autocomplete:!1}});return addressCache[s]=n.data,n.data}catch(e){throw console.error(`Error when making the geocoding request to "${s}":`,e),e}}),parsedAddressCache={};async function getParsedAddress(s){var t,e,r,n,i;try{if(parsedAddressCache[s])return parsedAddressCache[s];const o=await forwardGeocode(s);if(!o||o.features.length===0)return console.warn(`No results found for the address: "${s}"`),parsedAddressCache[s]=null,null;const a=o.features[0],c=((t=a.properties.context.address)==null?void 0:t.name)||((e=a.properties.context.street)==null?void 0:e.name)||"",f=((r=a.properties.context.postcode)==null?void 0:r.name)??"",E=a.properties.coordinates.latitude,T=a.properties.coordinates.longitude,w=((n=a.properties.context.place)==null?void 0:n.name)??"",x=((i=a.properties.context.region)==null?void 0:i.region_code)??"",v={city:w,postal_code:f,province:x,street:c,latitude:E,longitude:T};return parsedAddressCache[s]=v,v}catch(o){return console.error(`Error processing the address "${s}":`,o),null}}export{getParsedAddress as g};
