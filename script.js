
        const API_URL = ""; 

        const GAME_LIST = [
            "Genshin Impact", 
            "Honkai: Star Rail", 
            "Honkai Impact 3",
            "Zenless Zone Zero", 
            "Wuthering Waves",
            "Neverness to Everness (NTE)"
        ];
        
        const DEFAULT_BANNERS = [
            { id: 1, title: 'รับปั้นแรงค์ทุกเกม!', subtitle: 'ราคาเริ่มต้นเพียง 50 บาท ปลอดภัย 100%', image: 'https://placehold.co/800x400/2a1b5e/FFF?text=Rank+Boost', active: true, tagText: 'HOT DEAL', tagColor: 'yellow', bgGradient: 'from-indigo-900 to-purple-800', date: new Date().toISOString() }        
        ];

        const MOCK_ORDERS = [
            {
                id: 'mock-1', gameName: 'Genshin Impact', customerName: 'คุณเอ', username: 'user123', password: 'password123',
                startDate: new Date().toISOString().slice(0,10), endDate: new Date(new Date().setDate(new Date().getDate()+5)).toISOString().slice(0,10),
                price: 500, status: 'active', rank: 'vip',
                contacts: [{type:'line', value:'lineID_123'}, {type:'tel', value:'0812345678'}], 
                tasks: [{text:'Daily Commission', done:true}], notes: 'ลูกค้าเร่งงานนิดหน่อย'
            }
        ];

        const CONTACT_TYPES = [
            { value: 'facebook', text: 'Facebook', icon: 'fa-brands fa-facebook', color: 'text-blue-600' },
            { value: 'line', text: 'Line', icon: 'fa-brands fa-line', color: 'text-green-500' },
            { value: 'discord', text: 'Discord', icon: 'fa-brands fa-discord', color: 'text-indigo-500' },
            { value: 'tel', text: 'เบอร์โทร', icon: 'fa-solid fa-phone', color: 'text-slate-500' },
            //{ value: 'twitter', text: 'Twitter', icon: 'fa-brands fa-twitter', color: 'text-sky-400' },
            { value: 'X', text: 'Twitter (X)', icon: 'fa-brands fa-x-twitter', color: 'text-slate-800 dark:text-white' }, 
            { value: 'link', text: 'Link', icon: 'fa-solid fa-link', color: 'text-blue-500' },
            { value: 'email', text: 'Email', icon: 'fa-solid fa-envelope', color: 'text-red-500' },
            { value: 'Instagram', text: 'Instagram', icon: 'fa-brands fa-instagram', color: 'text-pink-500' },
            { value: 'Other', text: 'Other', icon: 'fa-solid fa-ellipsis', color: 'text-slate-500' }
        ];

        const CREDIT_LINK_TYPES = [
            { value: 'Facebook', label: 'Facebook', icon: 'fa-brands fa-facebook', color: 'text-blue-600' },
            { value: 'X', label: 'Twitter (X)', icon: 'fa-brands fa-x-twitter', color: 'text-slate-800 dark:text-white' }, 
            { value: 'Discord', label: 'Discord', icon: 'fa-brands fa-discord', color: 'text-indigo-500' },
            { value: 'Instagram', label: 'Instagram', icon: 'fa-brands fa-instagram', color: 'text-pink-500' },
            { value: 'Line', label: 'Line', icon: 'fa-brands fa-line', color: 'text-green-500' },
            { value: 'Other', label: 'Other', icon: 'fa-solid fa-ellipsis', color: 'text-slate-500' }
        ];

        const DONATE_OPTIONS = {
            tabs: [
                {
                    id: 'tab-thai-bank',
                    label: 'Thai Bank',
                    isActive: 1,
                    items: [
                        { bank: 'Kasikorn Bank (KBank)', accountName: 'นาย ไชยวัฒน์ ขวัญทา', accountNumber: '123-4-56789-0', branch: 'สาขาแหลมฉบัง', logo: 'https://www.kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png', isActive: 1 },
                        { bank: 'Bangkok Bank', accountName: 'นาย ไชยวัฒน์ ขวัญทา', accountNumber: '000-0-00000-0', branch: 'สาขาแหลมฉบัง', logo: 'https://www.riverside-plaza.com/wp-content/uploads/2024/04/6778a59cf74c69e8ca78e845cf550f54.jpg', isActive: 0 },
                        { bank: 'Siam Commercial Bank (SCB)', accountName: 'นาย ไชยวัฒน์ ขวัญทา', accountNumber: '653-422680-7', branch: 'สาขาแหลมฉบัง', logo: 'https://play-lh.googleusercontent.com/j-9a3HbVZoX337-MLdkmYt75yUfN5ahis8rOnE09972cFLdVn7Z5Dzu3Guo8ldUv2H4x', isActive: 1 }
                    ]
                },
                {
                    id: 'tab-true-money',
                    label: 'TrueMoney',
                    isActive: 1,
                    items: [
                        { wallet: '095-939-4524', name: 'Chaiwat Kwanta', logo: 'https://play-lh.googleusercontent.com/6I2IYbIg4rhGUgs0UxP_5q6wmJmlBjBrlQ9f0_FAN94yOzwmrtEteifCdPPd1-chY_NX', isActive: 1 }
                    ]
                },
                {
                    id: 'tab-promptpay',
                    label: 'PromptPay',
                    isActive: 1,
                    items: [
                        { promptId: '095-939-4524', type: 'เบอร์โทรศัพท์', name: 'Chaiwat Kwanta', logo: 'https://www.bot.or.th/content/dam/bot/icons/icon-thaiqr.png', isActive: 1 }
                    ]
                },
                {
                    id: 'tab-other',
                    label: 'Other',
                    isActive:0,
                    items: [
                        { label: 'PayPal Email', value: 'donate@keepplayit.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', isActive: 1 },
                        { label: 'Line Official', value: '@keepplayit', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg', isActive: 1 }
                    ]
                }
            ]
        };
            
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        let orders = []; let banners = [];
        let advertisements = JSON.parse(localStorage.getItem('gameBoosterAds')) || [
           { id: 1, title: 'เรทราคาจ้างเล่น Genshin Impact', image: 'https://i.ibb.co/mVf7TJrJ/unnamed-1.webp', link: 'https://i.ibb.co/mVf7TJrJ/unnamed-1.webp', active: true }
        ];

        let staminaSoundSettings = JSON.parse(localStorage.getItem('staminaSoundSettings')) || { type: 'beep', customUrl: '', volume: 1, enabled: true };
        let emailSettings = JSON.parse(localStorage.getItem('gameBoosterEmailSettings')) || { enabled: false, targetEmail: '', publicKey: '', serviceId: '', templateId: '' };
        if (!staminaSoundSettings.type) staminaSoundSettings.type = 'beep';
        if (staminaSoundSettings.type === 'tts') staminaSoundSettings.type = 'beep';
        if ('ttsPhrase' in staminaSoundSettings) delete staminaSoundSettings.ttsPhrase;
        let isRevenueVisible = false; let currentBanner = 0; let bannerInterval;
        let gameSelectModal, statusSelectModal, gameFilter, statusFilter, bannerTagSelect, quickTimeSelect;
        let staminaAlertContext = { active: false, audio: null, oscillator: null, audioContext: null };
        let toastTimeout = null; let dashboardChart = null;
        let dashboardVisible = true;
        let currentFilteredMonth = null; 
        let TOTAL_CREDITS = parseFloat(localStorage.getItem('gameBoosterTotalCredits')) || 0;
        
        function sendStaminaEmailAlert(order) {
            if (!emailSettings.enabled || !emailSettings.targetEmail || !emailSettings.publicKey || !emailSettings.serviceId || !emailSettings.templateId) return;
            
            emailjs.init(emailSettings.publicKey);
            
            // 1. จัดรูปแบบรายการ Tasks ให้เป็นระเบียบ (ใช้ <br> เพื่อขึ้นบรรทัดใหม่ในอีเมล HTML)
            const tasksHtml = order.tasks && order.tasks.length > 0 
                ? order.tasks.map(t => `${t.done ? '✅' : '⏳'} ${t.text}`).join('<br>')
                : 'ไม่มีรายการงาน';

            // 2. ดึงเวลาที่ Stamina เต็มจริง ๆ
            const alertTime = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' น.';

            // 3. แพ็กข้อมูลของ Job ทั้งหมดส่งไปที่ EmailJS
            const templateParams = {
                to_email: emailSettings.targetEmail,
                game_name: order.gameName,
                customer_name: order.customerName,
                username: order.username || '-',
                //password: order.password || '-',
                price: order.price ? order.price.toLocaleString() + ' บาท' : '0 บาท',
                notes: order.notes || '-',
                tasks_list: tasksHtml,
                alert_time: alertTime
            };

            emailjs.send(emailSettings.serviceId, emailSettings.templateId, templateParams)
                .then(function(response) {
                    console.log('✅ ส่งอีเมลแจ้งเตือนแบบ Custom สำเร็จ', response.status, response.text);
                    showToast(`ส่งอีเมลแจ้งเตือนคิวของ ${order.customerName} เรียบร้อย`, 'success');
                }, function(error) {
                    console.error('❌ ส่งอีเมลไม่สำเร็จ:', error);
                });
        }

        function closeAdModal() {
            $('#adModal').addClass('hidden');
        }

        function renderSideAds() {
            const container = $('#sideAdList');
            container.empty();
            
            const activeAds = [...advertisements].filter(ad => ad.active).reverse();
            
            if (activeAds.length === 0) {
                container.append('<p class="text-xs text-center text-slate-400 py-4">ไม่มีโฆษณาในขณะนี้</p>');
                return;
            }

            activeAds.forEach(ad => {
                const adHtml = `
                    <a href="${ad.link}" target="_blank" class="block relative transition-all duration-300 bg-white dark:bg-gaming-card rounded-xl shadow-md border border-gray-200 dark:border-slate-700 overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:border-gaming-accent/50 shrink-0 w-[240px] sm:w-[280px] 2xl:w-full snap-start">
                        <div class="relative w-full flex items-center justify-center bg-black/5 dark:bg-black/20"> 
                            <img src="${ad.image}" onerror="this.src='https://placehold.co/600x800/1e293b/8b5cf6?text=Image+Error'" class="w-full h-auto max-h-[160px] 2xl:max-h-[300px] object-contain group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <div class="p-3 text-center bg-white dark:bg-gaming-card border-t border-gray-100 dark:border-slate-700 relative z-10">
                            <h5 class="text-sm font-bold text-gaming-accent mb-0.5 truncate">${ad.title}</h5>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400">คลิกเพื่อดูรายละเอียด</p>
                        </div>
                    </a>
                `;
                container.append(adHtml);
            });
            toggleFloatingAd();
        }

        function openAdModal() {
            $('#adModal').removeClass('hidden');
            renderAdManagerList();
            resetAdForm();
        }
        function renderAdManagerList() {
            const list = $('#adManagerList');
            list.empty();
            
            [...advertisements].reverse().forEach(ad => {
                list.append(`
                <div class="bg-white dark:bg-[#0b1220]/50 border border-gray-200 dark:border-slate-700 rounded-xl p-3 flex items-center gap-4 hover:border-gaming-accent transition">
                    <div class="w-20 h-30 rounded-lg flex-shrink-0 relative overflow-hidden shadow-sm bg-slate-200 dark:bg-slate-800">
                        <img src="${ad.image}" onerror="this.src='https://placehold.co/600x800?text=Error'" class="w-full h-full object-cover opacity-90">
                    </div>
                    <div class="flex-1 min-w-0">
                        <h5 class="text-sm font-bold dark:text-white truncate">${ad.title}</h5>
                        <span class="text-[10px] truncate block text-slate-400 mt-1">${ad.link}</span>
                        <div class="mt-1.5"><span class="text-[10px] px-2 py-0.5 rounded font-medium ${ad.active ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'}">${ad.active ? 'Active' : 'Disabled'}</span></div>
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <button onclick="editAd(${ad.id})" class="p-1.5 bg-slate-50 dark:bg-slate-800 rounded text-slate-400 hover:text-blue-500 transition"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deleteAd(${ad.id})" class="p-1.5 bg-slate-50 dark:bg-slate-800 rounded text-slate-400 hover:text-rose-500 transition"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`);
            });
        }
        function saveAd() {
            const id = $('#adId').val();
            const title = $('#adTitle').val();
            if(!title) return showToast('กรุณาระบุหัวข้อโฆษณา', 'error');

            const newAd = {
                id: id ? parseInt(id) : Date.now(),
                title: title,
                image: $('#adImageUrl').val(),
                link: $('#adLink').val() || '#',
                active: $('#adActive').is(':checked')
            };

            if(id) {
                const index = advertisements.findIndex(a => a.id == id);
                if(index > -1) advertisements[index] = newAd;
            } else {
                advertisements.push(newAd);
            }

            localStorage.setItem('gameBoosterAds', JSON.stringify(advertisements));
            resetAdForm();
            renderAdManagerList();
            renderSideAds(); 
            showToast('บันทึกโฆษณาเรียบร้อย', 'success');
        }
        function editAd(id) {
            const ad = advertisements.find(a => a.id == id);
            if(!ad) return;
            $('#adId').val(ad.id);
            $('#adTitle').val(ad.title);
            $('#adImageUrl').val(ad.image);
            $('#adLink').val(ad.link);
            $('#adActive').prop('checked', ad.active);
            $('#adFormTitle').html('📝 แก้ไขโฆษณา');
        }

        function deleteAd(id) {
            showConfirm('ต้องการลบโฆษณานี้ใช่หรือไม่?').then(ok => {
                if(!ok) return;
                advertisements = advertisements.filter(a => a.id !== id);
                localStorage.setItem('gameBoosterAds', JSON.stringify(advertisements));
                renderAdManagerList();
                renderSideAds();
                showToast('ลบโฆษณาเรียบร้อย', 'success');
            });
        }
        function resetAdForm() {
            document.getElementById('adForm').reset();
            $('#adId').val('');
            $('#adFormTitle').html('✨ เพิ่มโฆษณาใหม่');
            $('#adActive').prop('checked', true);
        }
        
        const socialLinks = [
            { name: 'Github', url: 'https://github.com/chaiwat20180', icon: 'fa-brands fa-github', hoverClass: 'hover:bg-[#181717] hover:border-[#181717]', isActive: 1 },
            { name: 'Discord', url: 'https://discord.com/invite/GwQFSkCVUX', icon: 'fa-brands fa-discord', hoverClass: 'hover:bg-[#5865F2] hover:border-[#5865F2]', isActive: 1 },
            { name: 'Youtube', url: 'https://www.youtube.com/@KeepPlayIT', icon: 'fa-brands fa-youtube', hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000]', isActive: 1 },
            { name: 'Facebook', url: 'https://facebook.com/kchaiwat24', icon: 'fa-brands fa-facebook-f', hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]', isActive: 1 },
            { name: 'X (Twitter)', url: 'https://x.com/ckwant20230', icon: 'fa-brands fa-x-twitter', hoverClass: 'hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black', isActive: 1 },
            { name: 'Line', url: 'https://line.me/ti/p/ebslS6W2XV', icon: 'fa-brands fa-line', hoverClass: 'hover:bg-[#00B900] hover:border-[#00B900]', isActive: 1 },
            { name: 'Instagram', url: 'https://www.instagram.com/chaiwat.k0912', icon: 'fa-brands fa-instagram', hoverClass: 'hover:bg-[#E1306C] hover:border-[#E1306C]', isActive: 1 },
            { name: 'VK', url: '#', icon: 'fa-brands fa-vk', hoverClass: 'hover:bg-[#4C75A3] hover:border-[#4C75A3]', isActive: 0 }
        ];

        // Credit link section shown in the "Check credits here →" summary card.
        let CREDIT_LINKS = [
            // { name: 'Facebook', url: 'https://facebook.com/kchaiwat24', icon: 'fa-brands fa-facebook-f' },
            // { name: 'X', url: 'https://x.com/ckwant20230', icon: 'fa-brands fa-x-twitter' },
            // { name: 'Discord', url: 'https://discord.com/invite/GwQFSkCVUX', icon: 'fa-brands fa-discord' },
            // { name: 'Instagram', url: 'https://www.instagram.com/chaiwat.k0912', icon: 'fa-brands fa-instagram' }
        ];

        const socialContainer = document.getElementById('socialContainer');
        socialLinks.filter(item => item.isActive === 1).forEach(social => {
            const btn = document.createElement('a');
            btn.href = social.url;
            btn.target = '_blank';
            btn.title = social.name;
            btn.className = `w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white transition-all shadow-sm border border-gray-200 dark:border-slate-700 ${social.hoverClass}`;
            const icon = document.createElement('i');
            icon.className = `${social.icon} text-lg`;
            btn.appendChild(icon);
            socialContainer.appendChild(btn);
        });

        function renderCreditLinks() {
            const container = document.getElementById('creditLinksContainer');
            if (!container) return;
            container.innerHTML = CREDIT_LINKS.map(link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 border-b border-cyan-500/80 dark:border-cyan-400/70 pb-[1px] flex items-center gap-1 text-xs transition">
                    <i class="${link.icon || getCreditLinkIcon(link.name)} text-[10px]"></i>
                    <span>${link.name}</span>
                </a>
            `).join(' ');
        }

        $(document).ready(function() {
            initTheme(); initTomSelects(); populateGameData(); 
            setupSearch(); setupFlatpickr();
            loadData(); renderCreditLinks();
            dashboardVisible = (localStorage.getItem('dashboardVisible') !== 'false');
            if(!dashboardVisible) $('#dashboardSection').hide();
            updateDashboardToggleText();
            $(window).on('resize', toggleFloatingAd);

            $('#staminaSoundType').on('change', handleStaminaSoundTypeChange);
            $('#staminaVolume').on('input', updateStaminaVolumeDisplay);

            setInterval(() => {
                updateStaminaCountdowns();
            }, 1000);
        });
        
        function handleRankChange(radio) {
            const val = radio.value;
            const fpStart = document.querySelector('#startDate')._flatpickr;
            const fpEnd = document.querySelector('#endDate')._flatpickr;
            if (val === 'super_vvip') {
                statusSelectModal.disable();
                if(fpStart) { fpStart.clear(); fpStart._input.disabled = true; }
                if(fpEnd) { fpEnd.clear(); fpEnd._input.disabled = true; }
            } else {
                statusSelectModal.enable();
                if(fpStart) fpStart._input.disabled = false;
                if(fpEnd) fpEnd._input.disabled = false;
            }
        }

        function loadData() {
            if (typeof API_URL !== 'undefined' && API_URL) {
                fetch(API_URL).then(r => r.ok ? r.json() : Promise.reject(r))
                    .then(data => {
                        orders = data.orders || []; banners = data.banners || [];
                        if(orders.length === 0) orders = MOCK_ORDERS; if(banners.length === 0) banners = DEFAULT_BANNERS;
                        initApp();
                    }).catch(e => { console.error(e); loadFromLocal(); });
            } else loadFromLocal();
        }

        function loadFromLocal() {
            orders = JSON.parse(localStorage.getItem('gameBoosterOrders')) || MOCK_ORDERS;
            banners = JSON.parse(localStorage.getItem('gameBoosterBanners')) || DEFAULT_BANNERS;
            CREDIT_LINKS = JSON.parse(localStorage.getItem('gameBoosterCreditLinks')) || CREDIT_LINKS;
            initApp();
        }

        function initApp() { 
            // renderOrders(); 
            // renderBanners(); 
            // renderBannerList(); 
            // updateStats(); 
            // renderDashboard(); 
            // renderSideAds(); 
            // renderCreditLinks();
            if (typeof quickTimeSelect !== 'undefined' && quickTimeSelect) {
                quickTimeSelect.setValue('this_month', true);
                applyQuickTimeFilter(); 
            } else {
                renderOrders();
                renderDashboard();
                updateStats();
            }
            renderBanners(); 
            renderBannerList(); 
            renderSideAds(); 
            renderCreditLinks();
        }

        function toggleFloatingAd() {
            const activeAds = advertisements.filter(ad => ad.active);
            const floatingAd = $('#floatingLeftAd');
            
            if (floatingAd.length > 0 && activeAds.length > 0 && window.innerWidth >= 2048) { 
                floatingAd.removeClass('hidden').addClass('flex');
                const firstActiveAd = activeAds;
                $('#adMainTitle').text(firstActiveAd.title);
                $('#adMainImage').attr('src', firstActiveAd.image);
                $('#adMainLink').attr('href', firstActiveAd.link);
            } else if (floatingAd.length > 0) {
                floatingAd.addClass('hidden').removeClass('flex');
            }
        }
        
        function saveData() {
            localStorage.setItem('gameBoosterOrders', JSON.stringify(orders));
            localStorage.setItem('gameBoosterBanners', JSON.stringify(banners));
            localStorage.setItem('gameBoosterTotalCredits', TOTAL_CREDITS);
            localStorage.setItem('gameBoosterCreditLinks', JSON.stringify(CREDIT_LINKS));
            localStorage.setItem('staminaSoundSettings', JSON.stringify(staminaSoundSettings));
            if (typeof API_URL !== 'undefined' && API_URL) {
                fetch(API_URL, { method: 'POST', redirect: 'follow', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ orders, banners }) }).catch(console.error);
            }
        }

        function parseStaminaStart(value) {
            if (!value) return null;
            const trimmed = String(value).trim();
            let date = new Date(trimmed);
            if (!isNaN(date)) return date;
            const matches = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
            if (!matches) return null;
            let [, day, month, year, hour, minute, second] = matches;
            let yearNum = parseInt(year, 10);
            if (yearNum > 2500) yearNum -= 543;
            const iso = `${yearNum.toString().padStart(4,'0')}-${month.padStart(2,'0')}-${day.padStart(2,'0')}T${hour.padStart(2,'0')}:${minute}:${(second||'00').padStart(2,'0')}`;
            date = new Date(iso);
            return isNaN(date) ? null : date;
        }

        function parseStaminaDuration(value) {
            if (!value) return 0;
            const raw = String(value).trim().replace(/,/g, '.');
            if (!raw) return 0;
            let hours = 0; let minutes = 0;
            if (raw.includes(':')) {
                const parts = raw.split(':').map(part => parseInt(part, 10) || 0);
                hours = parts[0]; minutes = parts[1] || 0;
            } else if (raw.includes('.')) {
                const parts = raw.split('.');
                hours = parseInt(parts[0], 10) || 0;
                minutes = parseInt(parts[1], 10) || 0;
                if (parts[1].length === 1) {
                    minutes = minutes * 10;
                }
            } else {
                const number = parseFloat(raw);
                if (Number.isNaN(number)) return 0;
                hours = Math.floor(number);
                minutes = Math.round((number - hours) * 60);
            }
            if (minutes >= 60) {
                hours += Math.floor(minutes / 60);
                minutes = minutes % 60;
            }
            return Math.max(0, hours * 60 + minutes);
        }

        function formatCountdown(ms) {
            const totalSeconds = Math.max(0, Math.floor(ms / 1000));
            const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const secs = String(totalSeconds % 60).padStart(2, '0');
            return `${hours}:${mins}:${secs}`;
        }

        function computeStaminaInfo(order) {
            const duration = parseInt(order.staminaDurationMinutes, 10) || 0;
            if (!duration) return null;
            const start = order.staminaStart ? new Date(order.staminaStart) : new Date();
            const finish = new Date(start.getTime() + duration * 60000);
            const remaining = finish.getTime() - Date.now();
            return { duration, start, finish, remaining, expired: remaining <= 0 };
        }

        function getStaminaText(order) {
            const info = computeStaminaInfo(order);
            if (!info) return { 
                countdown: `<span class="text-slate-400 dark:text-slate-500 font-medium"><i class="fa-solid fa-bolt-slash mr-1 opacity-70"></i> ไม่มีการตั้งค่าแจ้งเตือน Stamina</span>`, 
                finish: `` 
            };
            
            const finishTime = info.finish.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            
            if (info.expired) {
                return {
                    countdown: `<span class="text-rose-500 dark:text-rose-400 font-bold"><i class="fa-solid fa-bell mr-1 animate-pulse"></i> Stamina เต็มแล้ว</span>`,
                    finish: `<span class="text-rose-500 dark:text-rose-400 font-medium">พลังงานเต็มตอน: ${finishTime}</span>`
                };
            }
            return {
                countdown: `<span class="text-sky-500 dark:text-sky-400 font-semibold"><i class="fa-solid fa-bolt mr-1"></i> Remaining in : ${formatCountdown(info.remaining)}</span>`,
                finish: `<span class="text-slate-500 dark:text-slate-400 font-medium">พลังงานเต็มตอน: ${finishTime}</span>`
            };
        }

        function updateStaminaCountdowns() {
            orders.forEach(order => {
                const info = computeStaminaInfo(order);
                const staminaHTML = getStaminaText(order);
                const countdownEl = document.getElementById(`staminaCountdown-${order.id}`);
                const finishEl = document.getElementById(`staminaFinish-${order.id}`);
                
                if (countdownEl) countdownEl.innerHTML = staminaHTML.countdown;
                if (finishEl) finishEl.innerHTML = staminaHTML.finish;
                
                if (info && info.expired && order.staminaAlertEnabled && !order.staminaAlerted) {
                    startStaminaAlertLoop();
                    sendStaminaEmailAlert(order);
                    order.staminaAlerted = true;
                    saveData();
                }
            });
        }

        function startStaminaAlertLoop() {
            if (!staminaSoundSettings.enabled || staminaAlertContext.active) return;
            const volume = Math.max(0.1, Math.min(1, parseFloat(staminaSoundSettings.volume) || 1));
            staminaAlertContext.active = true;
            $('#staminaAlertBar').removeClass('hidden');

            if (staminaSoundSettings.type === 'custom' && staminaSoundSettings.customUrl) {
                try {
                    const audio = new Audio(staminaSoundSettings.customUrl);
                    audio.loop = true;
                    audio.volume = volume;
                    audio.play().catch(() => console.warn('ไม่สามารถเล่นเสียงได้'));
                    staminaAlertContext.audio = audio;
                    return;
                } catch (err) {
                    console.warn('ไม่สามารถเล่นเสียงจาก URL ได้', err);
                }
            }

            if (window.AudioContext || window.webkitAudioContext) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                try {
                    const ctx = new AudioContext();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.value = 880;
                    gain.gain.value = Math.min(1, volume * 0.25);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();
                    staminaAlertContext.audioContext = ctx;
                    staminaAlertContext.oscillator = osc;
                } catch (err) {
                    console.warn('ไม่สามารถเริ่มเสียงแจ้งเตือนได้', err);
                    staminaAlertContext.active = false;
                    $('#staminaAlertBar').addClass('hidden');
                }
            }
        }

        function stopStaminaAlert() {
            staminaAlertContext.active = false;
            $('#staminaAlertBar').addClass('hidden');
            if (staminaAlertContext.audio) {
                staminaAlertContext.audio.pause();
                staminaAlertContext.audio.currentTime = 0;
                staminaAlertContext.audio = null;
            }
            if (staminaAlertContext.oscillator) {
                try { staminaAlertContext.oscillator.stop(); } catch (err) {}
                staminaAlertContext.oscillator = null;
            }
            if (staminaAlertContext.audioContext) {
                try { staminaAlertContext.audioContext.close(); } catch (err) {}
                staminaAlertContext.audioContext = null;
            }
        }

        function testStaminaAlertSound() {
            if (!staminaSoundSettings.enabled) return;
            const volume = Math.max(0.1, Math.min(1, parseFloat($('#staminaVolume').val()) || 1));
            if ($('#staminaSoundType').val() === 'custom' && $('#staminaCustomUrl').val().trim()) {
                const audio = new Audio($('#staminaCustomUrl').val().trim());
                audio.volume = volume;
                audio.play().catch(() => showToast('ไม่สามารถเล่นเสียงตัวอย่างได้', 'error'));
            } else if (window.AudioContext || window.webkitAudioContext) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = 880;
                gain.gain.value = Math.min(1, volume * 0.25);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + 0.25);
                osc.onended = () => ctx.close();
            }
            $('#staminaSettingsMessage').text('ทดสอบเสียงสำเร็จ');
            setTimeout(() => { $('#staminaSettingsMessage').text(''); }, 1500);
        }

        function openStaminaModal() {
            $('#staminaModal').removeClass('hidden');
            $('#staminaSettingsMessage').text('');
            refreshStaminaModalFields();
        }

        function closeStaminaModal() {
            $('#staminaModal').addClass('hidden');
        }

        function refreshStaminaModalFields() {
            $('#globalStaminaEnabled').prop('checked', !!staminaSoundSettings.enabled);
            $('#staminaSoundType').val(staminaSoundSettings.type || 'beep');
            $('#staminaCustomUrl').val(staminaSoundSettings.customUrl || '');
            $('#staminaVolume').val(staminaSoundSettings.volume || 1);
            
            // เพิ่มการดึงค่า Email
            $('#emailAlertEnabled').prop('checked', !!emailSettings.enabled);
            $('#emailTarget').val(emailSettings.targetEmail || '');
            $('#emailPublicKey').val(emailSettings.publicKey || '');
            $('#emailServiceId').val(emailSettings.serviceId || '');
            $('#emailTemplateId').val(emailSettings.templateId || '');

            updateStaminaVolumeDisplay();
            handleStaminaSoundTypeChange();
        }

        function handleStaminaSoundTypeChange() {
            const type = $('#staminaSoundType').val();
            $('#staminaCustomSoundRow').toggleClass('hidden', type !== 'custom');
        }

        function saveStaminaSettings() {
            staminaSoundSettings.enabled = $('#globalStaminaEnabled').is(':checked');
            staminaSoundSettings.type = $('#staminaSoundType').val();
            staminaSoundSettings.customUrl = $('#staminaCustomUrl').val().trim();
            staminaSoundSettings.volume = parseFloat($('#staminaVolume').val()) || 1;
            emailSettings.enabled = $('#emailAlertEnabled').is(':checked');
            emailSettings.targetEmail = $('#emailTarget').val().trim();
            emailSettings.publicKey = $('#emailPublicKey').val().trim();
            emailSettings.serviceId = $('#emailServiceId').val().trim();
            emailSettings.templateId = $('#emailTemplateId').val().trim();
            localStorage.setItem('gameBoosterEmailSettings', JSON.stringify(emailSettings));

            saveData();
            updateStaminaVolumeDisplay();
            $('#staminaSettingsMessage').text('บันทึกการตั้งค่าเรียบร้อย');
            setTimeout(() => { $('#staminaSettingsMessage').text(''); }, 3000);
        }

        function updateStaminaVolumeDisplay() {
            const volume = Math.max(0.1, Math.min(1, parseFloat($('#staminaVolume').val()) || 1));
            $('#staminaVolumePercent').text(`${Math.round(volume * 100)}%`);
        }

        function escapeHtml(value) {
            return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

        function escapeJsString(value) {
            return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r');
        }

        function applyQuickTimeFilter() {
            const val = quickTimeSelect ? quickTimeSelect.getValue() : $('#quickTimeFilter').val();
            const fpStart = document.querySelector('#filterStartDate')._flatpickr;
            const fpEnd = document.querySelector('#filterEndDate')._flatpickr;
            
            const today = new Date();
            let start, end;
            currentFilteredMonth = null; 

            if(val === 'this_month') {
                start = new Date(today.getFullYear(), today.getMonth(), 1);
                end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            } else if (val === 'last_month') {
                start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                end = new Date(today.getFullYear(), today.getMonth(), 0);
            } else if (val === 'this_year') {
                start = new Date(today.getFullYear(), 0, 1);
                end = new Date(today.getFullYear(), 11, 31);
            } else if (val === 'all') {
                fpStart.clear(); fpEnd.clear(); renderOrders(); renderDashboard(); return;
            } else {
                return; 
            }

            fpStart.setDate(start); fpEnd.setDate(end);
            renderOrders(); renderDashboard();
        }

        function sortOrders(list, sortBy) {
            if(sortBy === 'newest') list.sort((a,b) => new Date(b.startDate||0) - new Date(a.startDate||0));
            if(sortBy === 'oldest') list.sort((a,b) => new Date(a.startDate||0) - new Date(b.startDate||0));
            if(sortBy === 'price_desc') list.sort((a,b) => (b.price||0) - (a.price||0));
            if(sortBy === 'price_asc') list.sort((a,b) => (a.price||0) - (b.price||0));
            if(sortBy === 'urgency') {
                const w = { super_vvip: 5, urgent: 4, vvip: 3, vip: 2, special: 1, none: 0 };
                list.sort((a,b) => (w[b.rank||'none'] - w[a.rank||'none']));
            }
            if(sortBy === 'stamina_asc') {
                list.sort((a,b) => {
                    const getFinishTime = (order) => {
                        const duration = parseInt(order.staminaDurationMinutes, 10) || 0;
                        if (!duration) return Infinity; 
                        
                        const start = order.staminaStart ? new Date(order.staminaStart).getTime() : Date.now();
                        return start + (duration * 60000); // เวลาที่พลังงานจะเต็ม (ms)
                    };
                    return getFinishTime(a) - getFinishTime(b);
                });
            }
            return list;
        }

        function getFilteredOrders() {
            const search = $('#searchInput').val().toLowerCase();
            const searchInput = $('#searchInput').val().toLowerCase().trim();
            const searchTerms = searchInput.split(/[\s,]+/).filter(term => term.length > 0);
            const statusCheck = statusFilter ? (statusFilter.getValue() || 'all') : 'all';
            const gameCheck = gameFilter ? gameFilter.getValue() : [];
            const isAllGames = gameCheck.length === 0;
            const startDate = $('#filterStartDate').val();
            const endDate = $('#filterEndDate').val();

            let result = orders.filter(order => {
                const orderText = (order.gameName + order.customerName + (order.username||'')).toLowerCase();
                //const matchesSearch = (order.gameName+order.customerName+(order.username||'')).toLowerCase().includes(search);
                //const matchesStatus = statusCheck === 'all' || order.status === statusCheck;
                //const matchesGame = isAllGames || gameCheck.includes(order.gameName);
                const matchesSearch = searchTerms.length === 0 || searchTerms.some(term => orderText.includes(term));
                const matchesStatus = statusCheck === 'all' || order.status === statusCheck;
                const matchesGame = isAllGames || gameCheck.includes(order.gameName);

                // let matchesDate = true;
                // if(startDate && endDate) matchesDate = (new Date(order.startDate) <= new Date(endDate)) && (new Date(order.endDate) >= new Date(startDate));
                // else if (startDate) matchesDate = new Date(order.startDate) >= new Date(startDate);
                
                // return matchesSearch && matchesStatus && matchesGame && matchesDate;
                let matchesDate = true;
                if(startDate && endDate) matchesDate = (new Date(order.startDate) <= new Date(endDate)) && (new Date(order.endDate) >= new Date(startDate));
                else if (startDate) matchesDate = new Date(order.startDate) >= new Date(startDate);
                
                return matchesSearch && matchesStatus && matchesGame && matchesDate;
            });
            
            // const sortVal = document.getElementById('sortOrder') ? document.getElementById('sortOrder').value : 'newest';
            // return sortOrders(result, sortVal);
            const sortVal = document.getElementById('sortOrder') ? document.getElementById('sortOrder').value : 'newest';
            return sortOrders(result, sortVal);
        }

        function updateStats(filteredList = null) {
            const currentOrders = filteredList || getFilteredOrders();
            $('#stat-total').text(orders.length);
            
            const pending = orders.filter(o => o.status === 'pending').length;
            const active = orders.filter(o => o.status === 'active').length;
            const completed = orders.filter(o => o.status === 'completed').length;
            const canceled = orders.filter(o => o.status === 'canceled').length;

            $('#stat-pending').text(pending); $('#stat-active').text(active);
            $('#stat-completed').text(completed); $('#stat-canceled').text(canceled);

            const totalRevenue = currentOrders.filter(o => o.status !== 'canceled' && o.rank !== 'super_vvip').reduce((sum, o) => sum + (parseFloat(o.price) || 0), 0);
            $('#stat-revenue').text(isRevenueVisible ? '฿' + totalRevenue.toLocaleString() : '฿*****');
        }
        function toggleRevenue() { isRevenueVisible = !isRevenueVisible; updateStats(); }

        function copyReceipt(id) {
            const o = orders.find(x => x.id === id); if(!o) return;
            const completed = o.tasks ? o.tasks.filter(t => t.done).length : 0; const total = o.tasks ? o.tasks.length : 0; const progress = total === 0 ? "0" : Math.round((completed/total)*100);
            
            let statusTh = 'รอดำเนินการ'; if(o.status==='active') statusTh='กำลังดำเนินการ'; if(o.status==='completed') statusTh='เสร็จสิ้น'; if(o.status==='canceled') statusTh='ยกเลิกแล้ว';
            const msg = `🎮 สรุปงานจ้าง: ${o.gameName}\n👤 ชื่อลูกค้า: ${o.customerName}\n📊 รายการ:\n${o.tasks ? o.tasks.map(t => `- ${t.text}`).join('\n') : 'ไม่มีรายการ'}\n สถานะงาน: ${statusTh}\n💰 ราคา: ${o.price} บาท\n📅 วันที่: ${o.rank==='super_vvip'?'Lifetime':formatDate(o.startDate)+' - '+formatDate(o.endDate)}\n✨ ความคืบหน้า: ${progress}%\nขอบคุณที่ใช้บริการครับ!`;
            copyToClipboard(msg);
        }

        function copyReceiptDaily(id) {
            // const o = orders.find(x => x.id === id); if(!o) return;
            // // const msg = `🎮 รายการงานประจำวันที่ ${formatDate(new Date())}\n👤 ชื่อลูกค้า: ${o.customerName}\n📊 รายการ: ${o.tasks ? o.tasks.filter(t => !t.done).map(t => `- ${t.text}`).join('\n') : 'ไม่มีงานวันนี้'}\n💰 ราคา: ${o.price} บาท\n📅 วันที่: ${o.rank==='super_vvip'?'Lifetime':formatDate(o.startDate)+' - '+formatDate(o.endDate)}\nขอบคุณที่ใช้บริการครับ!`;
            // //const msg = `🎮 รายการงานประจำวันที่ ${formatDate(new Date())}\n👤 ชื่อลูกค้า: ${o.customerName}\n📊 รายการ:\n ${o.tasks ? o.tasks.filter(t => !t.done).map(t => `- ${t.text}`).join('\n') : 'ไม่มีงานวันนี้'}\n 📅 ประจำวันที่: ${o.rank==='super_vvip'?'Lifetime':formatDate(new Date())}\n สถานะ: เล่นเรียบร้อย ✅`;
            // const msg = `🎮 รายการงานประจำวันที่ ${formatDate(new Date())}\n👤 ชื่อลูกค้า: ${o.customerName}\n📊 รายการ:\n ${o.tasks ? o.tasks.map(t => `- ${t.text}`).join('\n') : 'ไม่มีรายการ'}\n 📅 ประจำวันที่: ${o.rank==='super_vvip'?'Lifetime':formatDate(new Date())}\n สถานะ: เล่นเรียบร้อย ✅`;
            
            // copyToClipboard(msg);
            const o = orders.find(x => x.id === id); if(!o) return;
            
            const msg = `🎮 รายการงานประจำวันที่ ${formatDate(new Date())}\n👤 ชื่อลูกค้า: ${o.customerName}\n📊 รายการ:\n ${o.tasks ? o.tasks.map(t => t.done ? `- ${t.text}` : `- ${t.text} [กำลังดำเนินการเล่น / รอปลดล็อคหมด / รอรีเซ็ต]`).join('\n') : 'ไม่มีรายการ'}\n 📅 ประจำวันที่: ${o.rank==='super_vvip'?'Lifetime':formatDate(new Date())}\n สถานะ: เล่นเรียบร้อย ✅`;
            
            copyToClipboard(msg);
        }

        function quickStatusUpdate(id, newStatus) {
            const idx = orders.findIndex(o => o.id === id);
            if(idx !== -1) { 
                orders[idx].status = newStatus; 
                saveData(); renderOrders(); renderDashboard(); 
                showToast(`อัปเดตสถานะเป็น ${newStatus} แล้ว`, 'success'); 
            }
        }

        function duplicateOrder(editId) {
            const order = orders.find(o => o.id === editId); if(!order) return;
            
            $('#orderModal').removeClass('hidden'); 
            $('#taskListContainer').empty(); $('#contactListContainer').empty(); 
            document.getElementById('orderForm').reset();
            
            $('#modalTitle').html('<i class="fa-solid fa-copy text-gaming-accent"></i> คัดลอกข้อมูลงานจ้าง (สร้างใหม่)'); 
            $('#orderId').val(''); 
            
            if(gameSelectModal) { if(GAME_LIST.includes(order.gameName)) { gameSelectModal.setValue(order.gameName); } else { gameSelectModal.setValue('new_game'); $('#customGameInput').val(order.gameName).removeClass('hidden'); } }
            
            $('#customerName').val(order.customerName + ' (Copy)'); 
            $('#username').val(order.username); $('#password').val(order.password); $('#price').val(order.price); $('#adminNotes').val(order.notes || '');
            
            const fpStart = document.querySelector('#startDate')._flatpickr; const fpEnd = document.querySelector('#endDate')._flatpickr;
            const rankVal = order.rank || 'none'; $(`input[name="rank"][value="${rankVal}"]`).prop('checked', true);

            if(rankVal === 'super_vvip') { 
                statusSelectModal.disable(); 
                if(fpStart) { fpStart.clear(); fpStart._input.disabled = true; } 
                if(fpEnd) { fpEnd.clear(); fpEnd._input.disabled = true; } 
            } else { 
                statusSelectModal.enable(); statusSelectModal.setValue('pending'); 
                if(fpStart) { fpStart.setDate(new Date()); fpStart._input.disabled = false; } 
                if(fpEnd) { fpEnd.setDate(new Date()); fpEnd._input.disabled = false; } 
            }
            
            if(order.contacts && order.contacts.length > 0) order.contacts.forEach(c => addContactInput(c.type, c.value)); else addContactInput();
            if(order.tasks && order.tasks.length > 0) order.tasks.forEach(t => addTaskInput(t.text, false)); else addTaskInput();
        }

        function quickAddTask(orderId) {
            const input = $(`#newTask-${orderId}`);
            const text = input.val().trim();
            if(!text) return;

            const order = orders.find(o => o.id === orderId);
            if(order) {
                if(!order.tasks) order.tasks = [];
                order.tasks.push({text: text, done: false});
                saveData();
                renderSingleOrderTasks(orderId);
                input.val(''); 
                showToast('เพิ่มงานสำเร็จ', 'success');
            }
        }

        function renderSingleOrderTasks(orderId) {
            const order = orders.find(o => o.id === orderId);
            if(!order) return;
            
            const listContainer = $(`#tasks-${orderId}`);
            listContainer.empty();
            
            if(order.tasks && order.tasks.length > 0) {
                order.tasks.forEach((task, idx) => {
                    listContainer.append(`<li class="flex items-start gap-2 text-[13px] ${task.done ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200 font-medium'}"><input type="checkbox" onchange="toggleTask('${order.id}', ${idx}, this)" ${task.done ? 'checked' : ''} class="mt-1 accent-gaming-accent cursor-pointer w-3.5 h-3.5"><span class="break-words w-full task-text">${escapeHtml(task.text)}</span></li>`);
                });
            }
            
            const completed = order.tasks ? order.tasks.filter(t => t.done).length : 0;
            const totalTasks = order.tasks ? order.tasks.length : 0;
            const progress = totalTasks === 0 ? 0 : Math.round((completed / totalTasks) * 100);
            $(`#progress-${orderId}`).css('width', `${progress}%`);
        }

        function renderOrders() {
            const container = $('#ordersSection'); container.empty();
            const filteredOrders = getFilteredOrders();
            updateStats(filteredOrders);

            if (filteredOrders.length === 0) { $('#emptyState').removeClass('hidden'); return; } else { $('#emptyState').addClass('hidden'); }

            filteredOrders.forEach(order => {
                const totalTasks = order.tasks ? order.tasks.length : 0;
                const completed = order.tasks ? order.tasks.filter(t => t.done).length : 0;
                const progress = totalTasks === 0 ? 0 : Math.round((completed / totalTasks) * 100);
                const rank = order.rank || 'none';
                
                let dateBadge;
                if (rank === 'super_vvip') {
                    dateBadge = `<span class="super-vvip-bg px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-sm"><i class="fa-solid fa-infinity"></i> Lifetime</span>`;
                } else {
                    const diffDays = Math.ceil((new Date(order.endDate).setHours(0,0,0,0) - new Date().setHours(0,0,0,0)) / (86400000));
                    dateBadge = diffDays < 0 ? '<span class="text-xs bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 px-2 rounded font-medium border border-red-200 dark:border-red-800">เลยกำหนด</span>' : (diffDays === 0 ? '<span class="text-xs bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-2 rounded font-medium border border-amber-200 dark:border-amber-800">วันสุดท้าย</span>' : `<span class="text-xs bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 rounded font-medium border border-blue-200 dark:border-blue-800">เหลือ ${diffDays} วัน</span>`);
                    if(order.status === 'canceled') dateBadge = '<span class="text-xs bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 px-2 rounded font-medium border border-gray-200 dark:border-gray-700">ยกเลิกแล้ว</span>';
                }

                let statusClass = 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'; 
                let statusText = 'รอดำเนินการ';
                
                if(order.status === 'pending') { statusClass = 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 status-badge'; statusText = '⏳ รอดำเนินการ'; }
                else if(order.status === 'active') { statusClass = 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-700/50 status-badge'; statusText = '🎮 กำลังเล่น'; }
                else if(order.status === 'completed') { statusClass = 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-400 dark:border-emerald-700/50 status-badge'; statusText = '✅ เสร็จสิ้น'; }
                else if(order.status === 'canceled') { statusClass = 'bg-rose-100 text-rose-700 border-rose-300 dark:bg-rose-900/40 dark:text-rose-400 dark:border-rose-700/50 status-badge'; statusText = '❌ ยกเลิก'; }

                let rankBadge = '';
                if (rank !== 'none') {
                    if (rank === 'vip') { rankBadge = '<span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm vip-bg rank-animated-bg status-badge"><i class="fa-solid fa-star mr-1 text-[10px]"></i> VIP</span>'; }
                    else if (rank === 'vvip') { rankBadge = '<span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm vvip-bg rank-animated-bg status-badge"><i class="fa-solid fa-crown mr-1 text-[10px]"></i> VVIP</span>'; }
                    else if (rank === 'special') { rankBadge = '<span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm special-bg rank-animated-bg status-badge"><i class="fa-solid fa-sparkles mr-1 text-[10px]"></i> Special</span>'; }
                    else if (rank === 'urgent') { rankBadge = '<span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm urgent-bg rank-animated-bg status-badge"><i class="fa-solid fa-fire mr-1 text-[10px]"></i> Urgent</span>'; }
                    else if (rank === 'super_vvip') { rankBadge = '<span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm super-vvip-bg rank-animated-bg status-badge"><i class="fa-solid fa-gem mr-1 text-[10px]"></i> Super VVIP</span>'; }
                }

                const staminaInfo = getStaminaText(order);
                let contactsHtml = '';
                if (order.contacts && order.contacts.length > 0) {
                    contactsHtml = '<div class="flex flex-wrap gap-2 mt-2.5">';
                    order.contacts.forEach(c => {
                        const info = CONTACT_TYPES.find(t => t.value === c.type) || { icon: 'fa-link', color: 'text-slate-500' };
                        let displayVal = c.value; let href = c.value.startsWith('http') ? c.value : '#'; let target = '_blank';
                        if(c.type === 'tel') { href = `tel:${c.value}`; target = ''; if(c.value.length >= 10) displayVal = c.value.substring(0,3) + '-XXX-' + c.value.substring(c.value.length-4); } else if (c.type === 'line' || c.type === 'discord') { href = '#'; target = ''; if(c.value.length > 4) displayVal = c.value.substring(0,2) + '***' + c.value.substring(c.value.length-2); } else if (c.type === 'facebook' || c.type === 'twitter' || c.type === 'X') { displayVal = 'Link'; }
                        if(c.type === 'email') { 
                            displayVal = c.value.substring(0, 2) + '***' + c.value.substring(c.value.indexOf('@'));
                        }
                        const safeHref = href ? escapeHtml(href) : '#';
                        const safeDisplayVal = escapeHtml(displayVal);
                        const safeCopyValue = escapeJsString(c.value);
                        contactsHtml += `<div class="flex items-center gap-1 text-xs bg-white dark:bg-[#0f172a] rounded-md border border-gray-200 dark:border-slate-700 pr-1 group/badge transition hover:border-gaming-accent shadow-sm"><a href="${safeHref}" target="${target}" class="flex items-center gap-1.5 pl-2 py-1 ${href==='#'?'cursor-default':''}"><i class="${info.icon} ${info.color}"></i><span class="max-w-[80px] truncate text-slate-600 dark:text-slate-400 group-hover/badge:text-gaming-accent font-medium">${safeDisplayVal}</span></a><button onclick="copyToClipboard('${safeCopyValue}')" class="text-slate-400 hover:text-emerald-500 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800" title="Copy"><i class="fa-regular fa-copy"></i></button></div>`;
                    });
                    contactsHtml += '</div>';
                }

                let dateDisplay = rank !== 'super_vvip' ? `<span class="font-medium"><i class="fa-regular fa-calendar mr-1"></i> ${formatDate(order.startDate)} - ${formatDate(order.endDate)}</span>` : `<span class="text-gaming-accent font-bold text-xs"><i class="fa-solid fa-infinity"></i> ไม่จำกัดเวลา</span>`;

                const card = `
                    <div id="card-${order.id}" class="order-card bg-white dark:bg-gaming-card rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm relative flex flex-col h-full opacity-${order.status === 'canceled' ? '60' : '100'}">
                        
                        <div class="p-5 border-b border-gray-100 dark:border-slate-700/50 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/40 dark:to-transparent relative">
                            <div class="flex justify-between items-start mb-3">
                                <div class="flex flex-wrap gap-1.5 items-center">
                                    <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm ${statusClass}">${statusText}</span>
                                    ${rankBadge}
                                </div>
                                <div class="flex gap-1 shrink-0 ml-2">
                                    <button onclick="quickStatusUpdate('${order.id}', '${order.status==='active'?'completed':'active'}')" class="w-8 h-8 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-${order.status==='active'?'emerald':'amber'}-500 transition" title="Quick Update"><i class="fa-solid fa-${order.status==='active'?'check':'gamepad'}"></i></button>
                                    <button onclick="duplicateOrder('${order.id}')" class="w-8 h-8 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-gaming-accent transition" title="คัดลอกงานจ้าง"><i class="fa-solid fa-copy"></i></button>
                                    <button onclick="editOrder('${order.id}')" class="w-8 h-8 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-500 transition" title="แก้ไขข้อมูล"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button onclick="deleteOrder('${order.id}')" class="w-8 h-8 rounded-full text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-500 transition" title="ลบทิ้ง"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-slate-800 dark:text-white truncate pr-2 ${order.status === 'canceled' ? 'line-through text-slate-400' : ''}">${escapeHtml(order.gameName)}</h3>
                            <div class="mt-1.5"><div class="flex items-center text-sm text-slate-500 dark:text-slate-400"><i class="fa-solid fa-user-tag text-xs mr-2 text-slate-400"></i><span class="truncate max-w-[150px] font-bold text-slate-700 dark:text-slate-300">${order.customerName ? escapeHtml(order.customerName) : '-'}</span></div>${contactsHtml}</div>
                        </div>

                        <div class="px-5 py-4 space-y-2.5 bg-slate-50 dark:bg-[#0b1220]/50 border-b border-gray-100 dark:border-slate-700/50">
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                                <div class="flex items-center gap-3 overflow-hidden flex-1">
                                    <i class="fa-solid fa-user text-slate-400 text-xs"></i>
                                    <span class="text-sm font-mono text-slate-600 dark:text-slate-300 truncate masked-text font-medium" data-value="${escapeHtml(order.username)}" data-revealed="false">${smartMask(order.username, false)}</span>
                                </div>
                                <div class="flex gap-1"><button onclick="toggleVisibility(this)" class="text-slate-400 hover:text-gaming-accent p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><i class="fa-solid fa-eye"></i></button><button onclick="copyToClipboard('${escapeJsString(order.username)}')" class="text-slate-400 hover:text-emerald-500 p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><i class="fa-solid fa-copy"></i></button></div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                                <div class="flex items-center gap-3 overflow-hidden flex-1">
                                    <i class="fa-solid fa-key text-slate-400 text-xs"></i>
                                    <span class="text-sm font-mono text-slate-600 dark:text-slate-300 truncate masked-text masked-dot" data-type="password" data-value="${escapeHtml(order.password)}" data-revealed="false">${smartMask(order.password, true)}</span>
                                </div>
                                <div class="flex gap-1"><button onclick="toggleVisibility(this)" class="text-slate-400 hover:text-gaming-accent p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><i class="fa-solid fa-eye"></i></button><button onclick="copyToClipboard('${escapeJsString(order.password)}')" class="text-slate-400 hover:text-emerald-500 p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><i class="fa-solid fa-copy"></i></button></div>
                            </div>
                        </div>

                        <div class="p-5 flex-1 flex flex-col gap-4">
                            <div class="flex justify-between text-[13px] text-slate-500">${dateDisplay}${dateBadge}</div>
                            <div class="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden shadow-inner"><div class="progress-bar bg-gradient-to-r from-gaming-accent to-fuchsia-500 h-2 rounded-full relative" style="width: ${progress}%" id="progress-${order.id}"></div></div>
                            <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mt-3 space-x-3">
                                <div id="staminaCountdown-${order.id}" class="truncate text-xs">${staminaInfo ? staminaInfo.countdown : ''}</div>
                                <div class="flex items-center gap-2">
                                    <div id="staminaFinish-${order.id}" class="truncate text-right text-xs">${staminaInfo ? staminaInfo.finish : ''}</div>
                                    ${order.staminaDurationMinutes > 0 ? `<button onclick="cancelStamina('${order.id}')" title="ยกเลิกการจับเวลา Stamina" class="flex items-center justify-center w-5 h-5 bg-rose-50 text-rose-500 dark:bg-rose-900/30 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-800 rounded transition border border-rose-200 dark:border-rose-800/50 shadow-sm"><i class="fa-solid fa-xmark text-[10px]"></i></button>` : ''}
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-3">
                                <span class="text-sm text-slate-500 dark:text-slate-400">รายการงาน (${totalTasks})</span>
                                <button onclick="checkAllTasks('${order.id}')" class="text-[11px] bg-sky-100 dark:bg-sky-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-sky-200 dark:hover:bg-sky-700 rounded px-3 py-1 transition shadow-sm"><i class="fa-solid fa-square-check mr-1"></i> อัพเดททั้งหมด </button>
                                <button onclick="uncheckAllTasks('${order.id}')" class="text-[11px] bg-red-100 dark:bg-red-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-red-200 dark:hover:bg-red-700 rounded px-3 py-1 transition shadow-sm"><i class="fa-solid fa-square-minus mr-1"></i> ยกเลิกทั้งหมด</button>
                            </div>
                            <ul class="space-y-2.5 mt-2" id="tasks-${order.id}">${order.tasks ? order.tasks.map((task, idx) => `<li class="flex items-start gap-2 text-[13px] ${task.done ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200 font-medium'}"><input type="checkbox" onchange="toggleTask('${order.id}', ${idx}, this)" ${task.done ? 'checked' : ''} class="mt-1 accent-gaming-accent cursor-pointer w-3.5 h-3.5"><span class="break-words w-full task-text">${escapeHtml(task.text)}</span></li>`).join('') : ''}</ul>
                            
                            <div class="mt-1 flex gap-2 items-center bg-slate-50 dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 focus-within:border-gaming-accent transition-colors">
                                <input type="text" id="newTask-${order.id}" class="flex-1 bg-transparent text-xs text-slate-700 dark:text-slate-200 px-2 py-1 focus:outline-none" placeholder="+ เพิ่มงานด่วน..." onkeypress="if(event.key==='Enter') quickAddTask('${order.id}')">
                                <button onclick="quickAddTask('${order.id}')" class="w-6 h-6 flex justify-center items-center rounded bg-gaming-accent hover:bg-gaming-accent-hover text-white transition shadow-sm"><i class="fa-solid fa-plus text-[10px]"></i></button>
                            </div>

                            ${order.notes ? `<div class="mt-auto pt-3 border-t border-dashed border-gray-200 dark:border-slate-700"><p class="text-[11px] text-amber-600 dark:text-amber-400/80 bg-amber-50 dark:bg-amber-900/10 p-2 rounded border border-amber-100 dark:border-amber-800/30"><i class="fa-solid fa-note-sticky mr-1"></i> ${escapeHtml(order.notes)}</p></div>` : '<div class="mt-auto"></div>'}
                        </div>
                        <div class="bg-gray-50 dark:bg-[#0b1220]/80 p-3 border-t border-gray-100 dark:border-slate-700/50 text-center">
                            <button onclick="copyReceiptDaily('${order.id}')" class="w-full text-xs font-bold text-gaming-accent hover:text-white bg-indigo-50 hover:bg-gaming-accent dark:bg-indigo-900/20 dark:hover:bg-gaming-accent transition py-2 rounded-md border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                                <i class="fa-solid fa-receipt mr-1"></i> คัดลอกสรุป <span class="text-red-700 dark:text-yellow-300">รายวัน</span> ส่งลูกค้า
                            </button>
                        </div>
                        <div class="bg-gray-50 dark:bg-[#0b1220]/80 p-3 border-t border-gray-100 dark:border-slate-700/50 text-center">
                            <button onclick="copyReceipt('${order.id}')" class="w-full text-xs font-bold text-gaming-accent hover:text-white bg-indigo-50 hover:bg-gaming-accent dark:bg-indigo-900/20 dark:hover:bg-gaming-accent transition py-2 rounded-md border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                                <i class="fa-solid fa-receipt mr-1"></i> คัดลอกสรุป <span class="text-red-700 dark:text-yellow-300">ทั้งหมด</span> ส่งลูกค้า
                            </button>
                        </div>
                    </div>`;
                container.append(card);
            });
        }

        function startBannerLoop() { 
            clearInterval(bannerInterval); 
            bannerInterval = setInterval(() => { changeBanner(1); }, 5000); 
        }
        function manualChangeBanner(dir) { clearInterval(bannerInterval); changeBanner(dir); startBannerLoop(); }
        
        function renderBanners() {
            const container = $('#bannerContainer'); 
            container.find('.banner-slide').remove();
            const activeBanners = banners.filter(b => b.active);
            if(activeBanners.length === 0) { container.addClass('hidden'); return; } else { container.removeClass('hidden'); }
            
            activeBanners.forEach((b, index) => {
                let visual = b.image ? `<div class="absolute right-0 top-0 h-full w-2/3 bg-cover bg-center opacity-40 z-10" style="background-image: url('${b.image}'); -webkit-mask-image: linear-gradient(to left, #000, transparent); mask-image: linear-gradient(to left, #000, transparent);"></div>` : `<i class="fa-solid ${b.icon} absolute right-10 bottom-0 text-9xl text-white/10 z-10 rotate-12 transform scale-150 origin-bottom-right"></i>`;
                let tagClass = 'bg-slate-500'; 
                if(b.tagColor === 'yellow') tagClass = 'bg-amber-400 text-amber-900';
                if(b.tagColor === 'green') tagClass = 'bg-emerald-500 text-white'; 
                if(b.tagColor === 'red') tagClass = 'bg-rose-500 text-white';
                if(b.tagColor === 'blue') tagClass = 'bg-sky-500 text-white';
                
                const html = `<div class="banner-slide ${index === 0 ? 'active' : ''} bg-gradient-to-r ${b.bgGradient || 'from-slate-800 to-slate-900'} flex items-center px-8 sm:px-16"><div class="text-white z-20 w-full md:w-2/3 drop-shadow-lg">${b.tagText ? `<span class="${tagClass} text-[10px] sm:text-xs font-bold px-2 py-1 rounded mb-3 inline-block shadow-sm tracking-wider uppercase">${b.tagText}</span>` : ''}<h2 class="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">${b.title}</h2><p class="text-slate-200 text-sm sm:text-base opacity-90">${b.subtitle.replace(/\n/g, '<br>')}</p></div>${visual}</div>`;
                container.append(html);
            });
            currentBanner = 0;
            startBannerLoop();
        }
        function changeBanner(dir) {
            const activeBanners = banners.filter(b => b.active); if(activeBanners.length <= 1) return;
            $('.banner-slide').eq(currentBanner).removeClass('active');
            currentBanner = (currentBanner + dir + activeBanners.length) % activeBanners.length;
            $('.banner-slide').eq(currentBanner).addClass('active');
        }

        function openBannerManager() { 
            $('#bannerModal').removeClass('hidden'); renderBannerList(); resetBannerForm(); 
            if(!bannerTagSelect) { bannerTagSelect = new TomSelect("#bannerTagColor", { create: false, dropdownParent: 'body', render: { option: (d,e)=>`<div><span class="inline-block w-3 h-3 rounded-full mr-2 bg-${d.value}-500"></span>${e(d.text)}</div>`, item: (d,e)=>`<div><span class="inline-block w-3 h-3 rounded-full mr-2 bg-${d.value}-500"></span>${e(d.text)}</div>` } }); }
        }
        function closeBannerModal() { $('#bannerModal').addClass('hidden'); }
        function openDonateModal() { renderDonateModal(); $('#donateModal').removeClass('hidden'); }
        function closeDonateModal() { $('#donateModal').addClass('hidden'); }
        function getCreditLinkIcon(name) {
            const value = (name || '').toLowerCase();
            if(value.includes('facebook')) return 'fa-brands fa-facebook-f';
            if(value === 'x' || value.includes('twitter')) return 'fa-brands fa-x-twitter';
            if(value.includes('discord')) return 'fa-brands fa-discord';
            if(value.includes('instagram')) return 'fa-brands fa-instagram';
            if(value.includes('line')) return 'fa-brands fa-line';
            return 'fa-solid fa-link';
        }

        function addCreditLinkRow(link = { name: '', url: '' }) {
            const id = 'creditLinkRow-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
            
            // เช็คว่าใช้ชื่อ CREDIT_LINK_TYPES.value หรือ CREDIT_LINK_TYPES.value ให้ถูกต้อง
            const selectedType = link.name ? (CREDIT_LINK_TYPES.some(t => t.value === link.name) ? link.name : 'Other') : CREDIT_LINK_TYPES.value;
            const customName = selectedType === 'Other' ? link.name : '';
            const options = CREDIT_LINK_TYPES.map(type => `<option value="${type.value}" ${type.value === selectedType ? 'selected' : ''}>${type.label}</option>`).join('');
            
            const row = `
                <div class="grid grid-cols-12 gap-2 items-start mt-2" id="${id}">
                    <div class="col-span-5">
                        <select class="credit-link-platform w-full">
                            ${options}
                        </select>
                    </div>
                    <div class="col-span-6">
                        <input type="url" class="credit-link-url w-full h-11 bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg px-3 text-sm text-slate-900 dark:text-white" value="${link.url || ''}" placeholder="https://...">
                    </div>
                    <div class="col-span-1 flex items-start">
                        <button type="button" onclick="removeCreditLinkRow('${id}')" class="w-full h-11 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-800 transition"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    <div class="col-span-12 ${selectedType === 'Other' ? '' : 'hidden'}" id="${id}-customNameRow">
                        <input type="text" class="credit-link-custom-name w-full h-11 bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg px-3 text-sm text-slate-900 dark:text-white" value="${customName}" placeholder="ระบุชื่อแพลตฟอร์มอื่น...">
                    </div>
                </div>
            `;
            $('#creditLinkRows').append(row);

            // เพิ่มส่วนนี้เพื่อ Initialize ตัว Select ให้สวยงามและผูก Event
            const selectEl = document.querySelector(`#${id} .credit-link-platform`);
            if (selectEl) {
                // เปลี่ยนจากการเรียกธรรมดา มาเป็นใส่ Render Function ให้แสดงไอคอนตาม CREDIT_LINK_TYPES
                const tomSelectInstance = new TomSelect(selectEl, { 
                    create: false,
                    dropdownParent: 'body',
                    render: { 
                        option: function(data, escape) { 
                            const type = CREDIT_LINK_TYPES.find(c => c.value === data.value); 
                            const icon = type?.icon || 'fa-solid fa-link'; 
                            const color = type?.color || 'text-slate-500'; 
                            return `<div><i class="${icon} ${color} mr-2"></i>${escape(data.text)}</div>`; 
                        }, 
                        item: function(data, escape) { 
                            const type = CREDIT_LINK_TYPES.find(c => c.value === data.value); 
                            const icon = type?.icon || 'fa-solid fa-link'; 
                            const color = type?.color || 'text-slate-500'; 
                            return `<div><i class="${icon} ${color} mr-2"></i>${escape(data.text)}</div>`; 
                        } 
                    }
                });
                
                tomSelectInstance.on('change', function(value) {
                    const customRow = document.getElementById(`${id}-customNameRow`);
                    if (value === 'Other') {
                        customRow.classList.remove('hidden');
                    } else {
                        customRow.classList.add('hidden');
                    }
                });
            }
        }

        function removeCreditLinkRow(id) {
            $('#' + id).remove();
        }

        function populateCreditLinkRows() {
            $('#creditLinkRows').empty();
            if(!CREDIT_LINKS || CREDIT_LINKS.length === 0) {
                addCreditLinkRow();
                return;
            }
            CREDIT_LINKS.forEach(link => addCreditLinkRow(link));
        }

        function handleCreditPlatformChange(rowId) {
            const row = document.getElementById(rowId);
            if (!row) return;
            const platform = row.querySelector('.credit-link-platform').value;
            const customNameRow = document.getElementById(`${rowId}-customNameRow`);
            if (customNameRow) {
                if (platform === 'Other') customNameRow.classList.remove('hidden');
                else customNameRow.classList.add('hidden');
            }
        }

        function openCreditsModal() {
            $('#creditsInput').val(TOTAL_CREDITS);
            populateCreditLinkRows();
            $('#creditsModal').removeClass('hidden');
        }
        function closeCreditsModal() { $('#creditsModal').addClass('hidden'); }
        function saveCredits() {
            const val = parseFloat($('#creditsInput').val());
            if(isNaN(val) || !isFinite(val)) return showToast('กรุณากรอกตัวเลขที่ถูกต้อง', 'error');

            const updatedLinks = [];
            let hasError = false;
            $('#creditLinkRows > div').each(function() {
                const platform = $(this).find('.credit-link-platform').val();
                const url = $(this).find('.credit-link-url').val().trim();
                const customName = $(this).find('.credit-link-custom-name').val()?.trim() || '';
                let name = platform;

                if(platform === 'Other') {
                    name = customName;
                }

                if(name || url) {
                    if(!name || !url) {
                        hasError = true;
                        return;
                    }
                    updatedLinks.push({ name, url, icon: getCreditLinkIcon(name) });
                }
            });

            // if(hasError) {
            //     return showToast('กรุณากรอกแพลตฟอร์มและ URL ให้ครบทุกแถว', 'error');
            // }

            TOTAL_CREDITS = val;
            CREDIT_LINKS = updatedLinks;
            localStorage.setItem('gameBoosterTotalCredits', TOTAL_CREDITS);
            localStorage.setItem('gameBoosterCreditLinks', JSON.stringify(CREDIT_LINKS));
            updateCreditDisplay(TOTAL_CREDITS);
            renderCreditLinks();
            closeCreditsModal();
            showToast('บันทึกเครดิตและลิงก์เรียบร้อย', 'success');
        }
        
        function renderDonateModal() {
            const visibleTabs = DONATE_OPTIONS.tabs.filter(tab => tab.isActive === 1);
            const tabButtons = $('#donateTabButtons');
            const tabContent = $('#donateTabContent');
            
            tabButtons.removeClass('flex-wrap').addClass('overflow-x-auto pb-2 custom-scrollbar flex-nowrap items-center');
            tabButtons.empty(); tabContent.empty();

            if (visibleTabs.length === 0) {
                tabContent.append('<div class="bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-5 text-sm text-slate-700 dark:text-slate-300">ไม่มีช่องทางรับบริจาค</div>');
                return;
            }

            visibleTabs.forEach((tab, index) => {
                const button = $('<button type="button" class="donate-tab-btn px-5 py-2.5 rounded-full text-sm font-medium flex-shrink-0 whitespace-nowrap transition-colors"></button>');
                button.text(tab.label); button.attr('data-tab', tab.id);
                button.on('click', () => switchDonateTab(tab.id));
                if (index === 0) { button.addClass('bg-gaming-accent text-white'); } else { button.addClass('bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'); }
                tabButtons.append(button);

                const panel = $('<div class="donate-tab-panel"></div>');
                panel.attr('id', tab.id);
                if (index !== 0) panel.addClass('hidden');

                const tabCard = $('<div class="bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-5"></div>');
                tabCard.append(`<h4 class="text-sm font-semibold text-slate-800 dark:text-white mb-4">${tab.label}</h4>`);

                const imgClass = "w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-contain bg-white p-2 border border-gray-200 dark:border-slate-700 shadow-sm";

                tab.items.filter(item => item.isActive === 1).forEach(item => {
                    if (tab.id === 'tab-thai-bank') {
                        tabCard.append(`
                            <div class="flex justify-between items-center mb-4 gap-4">
                                <div class="space-y-3 text-sm text-slate-700 dark:text-slate-300 flex-1">
                                    <div><span class="block font-medium">ธนาคาร:</span> ${item.bank}</div>
                                    <div><span class="block font-medium">ชื่อบัญชี:</span> ${item.accountName}</div>
                                    <div><span class="block font-medium">เลขที่บัญชี:</span> ${item.accountNumber}</div>
                                    <div><span class="block font-medium">สาขา:</span> ${item.branch}</div>
                                </div>
                                <div class="flex-shrink-0">
                                    <img src="${item.logo}" alt="${item.bank}" class="${imgClass}">
                                </div>
                            </div>
                            <button type="button" onclick="copyToClipboard('${item.accountNumber.replace(/-/g, '')}')" class="mt-2 w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition shadow-sm"><i class="fa-regular fa-copy mr-2"></i> คัดลอกเลขที่บัญชี</button>
                            <div class="border-t border-gray-200 dark:border-slate-700 my-5"></div>
                        `);
                    } else if (tab.id === 'tab-true-money') {
                        tabCard.append(`
                            <div class="flex justify-between items-center mb-4 gap-4">
                                <div class="space-y-3 text-sm text-slate-700 dark:text-slate-300 flex-1">
                                    <div><span class="block font-medium">หมายเลข TrueMoney Wallet:</span> ${item.wallet}</div>
                                    <div><span class="block font-medium">ชื่อผู้รับ:</span> ${item.name}</div>
                                </div>
                                <div class="flex-shrink-0">
                                    <img src="${item.logo}" alt="TrueMoney" class="${imgClass}">
                                </div>
                            </div>
                            <button type="button" onclick="copyToClipboard('${item.wallet.replace(/-/g, '')}')" class="mt-2 w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition shadow-sm"><i class="fa-regular fa-copy mr-2"></i> คัดลอกหมายเลข</button>
                            <div class="border-t border-gray-200 dark:border-slate-700 my-5"></div>
                        `);
                    } else if (tab.id === 'tab-promptpay') {
                        const qrUrl = generatePromptPayQRUrl(item.promptId, item.name);
                        tabCard.append(`
                            <div class="flex justify-between items-start mb-4 gap-4">
                                <div class="space-y-3 text-sm text-slate-700 dark:text-slate-300 flex-1 mt-1">
                                    <div><span class="block font-medium">PromptPay ID / เบอร์:</span> ${item.promptId}</div>
                                    <div><span class="block font-medium">ชื่อ:</span> ${item.name}</div>
                                    <div><span class="block font-medium">ประเภท:</span> ${item.type}</div>
                                </div>
                                <div class="flex-shrink-0">
                                    <img src="${item.logo}" alt="PromptPay" class="${imgClass}">
                                </div>
                            </div>
                            ${qrUrl ? `<div class="mx-auto w-48 h-48 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-white flex items-center justify-center mb-5 shadow-sm"><img src="${qrUrl}" alt="PromptPay QR" class="w-full h-full object-contain p-2"></div>` : `<div class="text-sm text-red-500 mb-4">ไม่สามารถสร้าง QR code ได้</div>`}
                            <button type="button" onclick="copyToClipboard('${item.promptId.replace(/-/g, '')}')" class="mt-2 w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition shadow-sm"><i class="fa-regular fa-copy mr-2"></i> คัดลอก PromptPay</button>
                            <div class="border-t border-gray-200 dark:border-slate-700 my-5"></div>
                        `);
                    } else if (tab.id === 'tab-other') {
                        const logoHtml = item.logo ? `<div class="flex-shrink-0"><img src="${item.logo}" alt="${item.label}" class="${imgClass}"></div>` : '';
                        tabCard.append(`
                            <div class="flex justify-between items-center mb-4 gap-4">
                                <div class="space-y-3 text-sm text-slate-700 dark:text-slate-300 flex-1">
                                    <div><span class="block font-medium">${item.label}:</span> <span class="break-all">${item.value}</span></div>
                                </div>
                                ${logoHtml}
                            </div>
                            <button type="button" onclick="copyToClipboard('${item.value}')" class="mt-2 w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition shadow-sm"><i class="fa-regular fa-copy mr-2"></i> คัดลอก ${item.label}</button>
                            <div class="border-t border-gray-200 dark:border-slate-700 my-5"></div>
                        `);
                    }
                });

                tabCard.children('.border-t').last().remove();
                panel.append(tabCard); tabContent.append(panel);
            });
        }

        function switchDonateTab(tabId) {
            $('.donate-tab-btn').removeClass('bg-gaming-accent text-white').addClass('bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300');
            $(`.donate-tab-btn[data-tab="${tabId}"]`).removeClass('bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300').addClass('bg-gaming-accent text-white');
            $('.donate-tab-panel').addClass('hidden');
            $(`#${tabId}`).removeClass('hidden');
        }
        function generatePromptPayQRUrl(promptId, name) {
            if (!promptId) return '';
            const url = `https://promptpay.io/${promptId}`;
            const params = name ? `?name=${encodeURIComponent(name)}` : '';
            return url + params;
        }
        function resetBannerForm() { document.getElementById('bannerForm').reset(); $('#bannerId').val(''); $('#bannerFormTitle').html('✨ เพิ่ม Banner ใหม่'); $('#bannerActive').prop('checked', true); if(bannerTagSelect) bannerTagSelect.clear(); }
        
        function renderBannerList() {
            const list = $('#bannerList'); list.empty();
            [...banners].sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(b => {
                let tagClass = 'bg-gray-100 text-slate-500 border border-gray-200';
                if(b.tagColor === 'yellow') tagClass = 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800';
                if(b.tagColor === 'green') tagClass = 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800';
                if(b.tagColor === 'red') tagClass = 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800';
                if(b.tagColor === 'blue') tagClass = 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-400 dark:border-sky-800';
                list.append(`<div class="bg-white dark:bg-[#0b1220]/50 border border-gray-200 dark:border-slate-700 rounded-xl p-3 flex items-center gap-4 hover:border-gaming-accent transition"><div class="w-20 h-16 rounded-lg bg-gradient-to-br ${b.bgGradient || 'from-gray-700'} flex-shrink-0 relative overflow-hidden shadow-sm">${b.image ? `<img src="${b.image}" class="w-full h-full object-cover opacity-80">` : ''}</div><div class="flex-1 min-w-0"><h5 class="text-sm font-bold dark:text-white truncate">${b.title}</h5><div class="flex flex-wrap gap-2 mt-1.5"><span class="text-[10px] px-2 py-0.5 rounded font-medium ${b.active?'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400':'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'}">${b.active?'Active':'Disabled'}</span>${b.tagText?`<span class="text-[10px] px-2 py-0.5 rounded border font-medium ${tagClass}">${b.tagText}</span>`:''}</div></div><div class="flex flex-col gap-1.5"><button onclick="editBanner(${b.id})" class="p-1.5 bg-slate-50 dark:bg-slate-800 rounded text-slate-400 hover:text-blue-500 transition"><i class="fa-solid fa-pen"></i></button><button onclick="deleteBanner(${b.id})" class="p-1.5 bg-slate-50 dark:bg-slate-800 rounded text-slate-400 hover:text-rose-500 transition"><i class="fa-solid fa-trash"></i></button></div></div>`);
            });
        }
        function saveBanner() {
            const id = $('#bannerId').val(); const title = $('#bannerTitle').val(); if(!title) return alert('ระบุหัวข้อ');
            const newBanner = { id: id ? parseInt(id) : Date.now(), title, subtitle: $('#bannerSubtitle').val(), image: $('#bannerImage').val(), tagText: $('#bannerTagText').val(), tagColor: bannerTagSelect ? bannerTagSelect.getValue() : 'gray', active: $('#bannerActive').is(':checked'), bgGradient: 'from-indigo-900 to-purple-800', date: new Date().toISOString() };
            if(id) banners[banners.findIndex(b => b.id == id)] = newBanner; else banners.push(newBanner);
            saveData(); resetBannerForm(); renderBannerList(); renderBanners(); showToast('บันทึก Banner เรียบร้อย', 'success');
        }
        function editBanner(id) { const b = banners.find(x => x.id == id); if(!b) return; $('#bannerId').val(b.id); $('#bannerTitle').val(b.title); $('#bannerSubtitle').val(b.subtitle); $('#bannerImage').val(b.image); $('#bannerTagText').val(b.tagText); $('#bannerActive').prop('checked', b.active); if(bannerTagSelect) bannerTagSelect.setValue(b.tagColor); $('#bannerFormTitle').html('📝 แก้ไข Banner'); }
        function previewBannerImage() {
            const bannerUrl = $('#bannerImage').val().trim();
            const adUrl = $('#adImageUrl').val().trim();
            const url = bannerUrl || adUrl;
            
            if (url) {
                $('#previewImageTarget').attr('src', url);
                $('#imagePreviewModal').removeClass('hidden');
                showToast('เปิดดูตัวอย่างรูปภาพแล้ว', 'success');
            } else {
                showToast('กรุณาใส่ URL รูปภาพก่อน', 'error');
            }
        }
        function closePreviewModal() { $('#imagePreviewModal').addClass('hidden'); }

        function openModal() {
            $('#orderModal').removeClass('hidden'); $('#taskListContainer').empty(); $('#contactListContainer').empty(); 
            document.getElementById('orderForm').reset(); $('#orderId').val('');
            if(gameSelectModal) { gameSelectModal.clear(); } if(statusSelectModal) statusSelectModal.clear(); $('#customGameInput').addClass('hidden');
            $('input[name="rank"][value="none"]').prop('checked', true); statusSelectModal.enable();
            
            const fpStart = document.querySelector('#startDate')._flatpickr; const fpEnd = document.querySelector('#endDate')._flatpickr;
            if(fpStart) { fpStart._input.disabled = false; fpStart.setDate(new Date()); }
            if(fpEnd) { fpEnd._input.disabled = false; fpEnd.setDate(new Date()); }
            $('#staminaDuration').val('');
            $('#staminaStart').val('');
            $('#staminaStartDisplay').val('');
            $('#staminaFinishDisplay').val('');
            $('#staminaAlertEnabled').prop('checked', true);

            $('#modalTitle').html('<i class="fa-solid fa-clipboard-list text-gaming-accent"></i> เพิ่มข้อมูลงานจ้าง'); 
            addTaskInput(); addContactInput();
        }

        function editOrder(editId) {
            const order = orders.find(o => o.id === editId); if(!order) return;
            $('#orderModal').removeClass('hidden'); $('#taskListContainer').empty(); $('#contactListContainer').empty(); 
            document.getElementById('orderForm').reset();
            $('#modalTitle').html('<i class="fa-solid fa-pen-to-square text-gaming-accent"></i> แก้ไขข้อมูลงาน'); $('#orderId').val(order.id);
            
            if(gameSelectModal) { if(GAME_LIST.includes(order.gameName)) { gameSelectModal.setValue(order.gameName); } else { gameSelectModal.setValue('new_game'); $('#customGameInput').val(order.gameName).removeClass('hidden'); } }
            $('#customerName').val(order.customerName);
            $('#username').val(order.username); $('#password').val(order.password); $('#price').val(order.price); $('#adminNotes').val(order.notes || '');
            
            const fpStart = document.querySelector('#startDate')._flatpickr; const fpEnd = document.querySelector('#endDate')._flatpickr;
            const rankVal = order.rank || 'none'; $(`input[name="rank"][value="${rankVal}"]`).prop('checked', true);

            if(rankVal === 'super_vvip') { statusSelectModal.disable(); if(fpStart) { fpStart.clear(); fpStart._input.disabled = true; } if(fpEnd) { fpEnd.clear(); fpEnd._input.disabled = true; } } else { statusSelectModal.enable(); statusSelectModal.setValue(order.status); if(fpStart) { fpStart.setDate(order.startDate); fpStart._input.disabled = false; } if(fpEnd) { fpEnd.setDate(order.endDate); fpEnd._input.disabled = false; } }
            
            $('#staminaDuration').val(order.staminaDurationInput || '');
            if(order.staminaStart) {
                $('#staminaStart').val(order.staminaStart);
                $('#staminaStartDisplay').val(new Date(order.staminaStart).toLocaleString('th-TH'));
            } else {
                $('#staminaStart').val('');
                $('#staminaStartDisplay').val('');
            }
            $('#staminaAlertEnabled').prop('checked', order.staminaAlertEnabled !== false);
            
            if(order.contacts && order.contacts.length > 0) order.contacts.forEach(c => addContactInput(c.type, c.value)); else addContactInput();
            if(order.tasks && order.tasks.length > 0) order.tasks.forEach(t => addTaskInput(t.text, !!t.done)); else addTaskInput();
        }

        function closeModal() { $('#orderModal').addClass('hidden'); }
        
        function addContactInput(type = 'facebook', value = '') {
            const id = Date.now() + Math.floor(Math.random() * 10000);
            const safeValue = escapeHtml(value);
            
            const html = `
            <div class="flex gap-2 items-center mb-2 contact-row" id="contact-${id}">
                <div class="w-1/3">
                    <select id="contactSelect-${id}" name="contactType[]" class="w-full">
                        ${CONTACT_TYPES.map(t => `<option value="${t.value}" ${type===t.value?'selected':''}>${t.text}</option>`).join('')}
                    </select>
                </div>
                
                <div class="relative flex-1">
                    <input type="password" id="contactValue-${id}" value="${safeValue}" name="contactValue[]" class="w-full h-[44px] bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg pl-3 pr-10 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-gaming-accent focus:outline-none" placeholder="URL หรือ เบอร์โทร...">
                    
                    <button type="button" onclick="toggleSensitiveField('contactValue-${id}', this)" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-gaming-accent transition">
                        <i class="fa-solid fa-eye text-sm"></i>
                    </button>
                </div>
                
                <button type="button" onclick="$('#contact-${id}').remove()" class="text-slate-400 hover:text-rose-500 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>`;
            
            $('#contactListContainer').append(html); 
            new TomSelect(`#contactSelect-${id}`, window.contactSelectConfig);
        }

        // function toggleContactVisibility(inputId, btn) {
        //     const input = document.getElementById(inputId);
        //     const icon = btn.querySelector('i');
            
        //     if (input.type === 'password') {
        //         input.type = 'text';
        //         icon.classList.remove('fa-eye');
        //         icon.classList.add('fa-eye-slash', 'text-gaming-accent');
        //     } else {
        //         input.type = 'password';
        //         icon.classList.remove('fa-eye-slash', 'text-gaming-accent');
        //         icon.classList.add('fa-eye');
        //     }
        // }
        function toggleSensitiveField(fieldId, btn) {
            const input = document.getElementById(fieldId);
            if (!input) return;
            
            const isHidden = input.type === 'password';
            input.type = isHidden ? 'text' : 'password';
            
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
                icon.classList.toggle('text-gaming-accent', isHidden);
            }
        }
        function addTaskInput(value = '', done = false) {
            const id = Date.now() + Math.floor(Math.random() * 10000);
            const safeValue = escapeHtml(value);
            $('#taskListContainer').append(`<div class="flex gap-2 items-center mb-2" id="task-${id}" data-done="${done}"><input type="text" value="${safeValue}" name="tasks[]" class="flex-1 h-10 bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-600 rounded-md px-3 text-sm dark:text-white focus:outline-none focus:border-gaming-accent focus:ring-1 focus:ring-gaming-accent" placeholder="รายละเอียดสิ่งที่ต้องทำ..."><button type="button" onclick="$('#task-${id}').remove()" class="text-slate-400 hover:text-rose-500 w-10 h-10 flex items-center justify-center rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/20"><i class="fa-solid fa-trash-can"></i></button></div>`);
        }

        function toggleVisibility(btn) {
            const row = $(btn).closest('.border'); const span = row.find('[data-value]').first(); if(!span || span.length === 0) return;
            const full = span.attr('data-value') || ''; const isRevealed = span.attr('data-revealed') === 'true'; const isPassword = span.attr('data-type') === 'password';
            if(isRevealed) { span.text(smartMask(full, isPassword)); span.attr('data-revealed', 'false'); $(btn).find('i').removeClass('fa-eye-slash text-gaming-accent').addClass('fa-eye text-slate-400'); } else { span.text(full); span.attr('data-revealed', 'true'); $(btn).find('i').removeClass('fa-eye text-slate-400').addClass('fa-eye-slash text-gaming-accent'); }
        }

        

        function showConfirm(message, icon = 'fa-triangle-exclamation', color = 'rose') {
            return new Promise((resolve) => {
                $('#confirmIcon').attr('class', `fa-solid ${icon} text-${color}-500 text-xl`);
                $('#confirmIconBox').attr('class', `mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-${color}-100 dark:bg-${color}-900/30 mb-4`);
                $('#confirmOk').attr('class', `px-5 py-2.5 rounded-lg bg-${color}-500 text-white hover:bg-${color}-600 font-medium w-full transition shadow-lg shadow-${color}-500/30`);
                $('.confirm-box').css('border-top', `4px solid var(--tw-color-${color}-500)`);

                $('#confirmMessage').text(message); $('#confirmModal').removeClass('hidden'); $('body').addClass('confirm-open');
                const off = () => { $('#confirmModal').addClass('hidden'); $('#confirmOk, #confirmCancel, #confirmOverlay').off('click'); $('body').removeClass('confirm-open'); };
                $('#confirmOk').one('click', () => { off(); resolve(true); }); $('#confirmCancel, #confirmOverlay').one('click', () => { off(); resolve(false); });
            });
        }

        function deleteOrder(id) { showConfirm('คุณแน่ใจหรือไม่ว่าต้องการลบงานจ้างนี้?').then(ok=>{ if(!ok) return; orders = orders.filter(o => o.id !== id); saveData(); renderOrders(); renderDashboard(); showToast('ลบออเดอร์เรียบร้อย', 'success'); }); }
        function deleteBanner(id) { showConfirm('ต้องการลบ Banner นี้ใช่หรือไม่?').then(ok=>{ if(!ok) return; banners = banners.filter(b => b.id !== id); saveData(); renderBannerList(); renderBanners(); showToast('ลบ Banner เรียบร้อย', 'success'); }); }

        // function importData(input) { 
        //     const f = input.files[0]; if(!f) return; const r = new FileReader();
        //     r.onload = (e) => { 
        //         try { 
        //             const j = JSON.parse(e.target.result);
        //             showConfirm('ยืนยันการ Import ข้อมูล?', 'fa-file-import', 'amber').then(ok => {
        //                 if(!ok) { $(input).val(''); return; }
        //                 if(j.orders) { 
        //                     orders = j.orders; 
        //                     banners = j.banners || banners; 
        //                     if(j.advertisements) {
        //                         advertisements = j.advertisements;
        //                         localStorage.setItem('gameBoosterAds', JSON.stringify(advertisements));
        //                     }
        //                     if(j.totalCredits !== undefined) {
        //                         TOTAL_CREDITS = parseFloat(j.totalCredits) || TOTAL_CREDITS;
        //                         localStorage.setItem('gameBoosterTotalCredits', TOTAL_CREDITS);
        //                         updateCreditDisplay(TOTAL_CREDITS);
        //                     }
        //                     if(j.creditLinks) {
        //                         CREDIT_LINKS = j.creditLinks;
        //                         localStorage.setItem('gameBoosterCreditLinks', JSON.stringify(CREDIT_LINKS));
        //                     }
        //                     if(j.staminaSoundSettings) {
        //                         staminaSoundSettings = j.staminaSoundSettings;
        //                         localStorage.setItem('staminaSoundSettings', JSON.stringify(staminaSoundSettings));
        //                         refreshStaminaModalFields();
        //                     }
        //                     if(j.emailSettings) {
        //                         emailSettings = j.emailSettings;
        //                         localStorage.setItem('gameBoosterEmailSettings', JSON.stringify(emailSettings));
        //                     }
        //                     if(typeof refreshStaminaModalFields === 'function') refreshStaminaModalFields();
        //                 } else {
        //                     orders = j;
        //                 }
        //                 saveData(); initApp(); showToast('Import ข้อมูลสำเร็จ', 'success');
        //             });
        //         } catch(err){ showToast('ไฟล์ JSON ไม่ถูกต้อง', 'error'); }
        //         $(input).val('');
        //     }; 
        //     r.readAsText(f); 
        // }
        // ==========================================
        // ระบบ BACKUP / EXPORT (File & Code)
        // ==========================================
        
        function getBackupJSONString() {
            return JSON.stringify({
                orders, 
                banners, 
                advertisements, 
                totalCredits: TOTAL_CREDITS, 
                creditLinks: CREDIT_LINKS, 
                staminaSoundSettings, 
                emailSettings
            });
        }

        // function openExportModal() {
        //     $('#exportCodeData').val(getBackupJSONString());
        //     $('#exportModal').removeClass('hidden');
        // }
        function openExportModal() {
            const el = document.getElementById('exportCodeData');
            el.value = getBackupJSONString();
            
            // รีเซ็ตให้กลับมาเบลอทุกครั้งที่เปิด Modal
            el.classList.add('blur-sm', 'select-none');
            
            $('#exportModal').removeClass('hidden');
        }

        function closeExportModal() {
            $('#exportModal').addClass('hidden');
        }

        function exportDataToFile() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const date = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(getBackupJSONString());
            const a = document.createElement('a'); 
            a.setAttribute("href", dataStr); 
            a.setAttribute("download", `game_booster_backup_${year}${month}${date}${hours}${minutes}${seconds}.json`); 
            document.body.appendChild(a); 
            a.click(); 
            a.remove();
            
            showToast('ดาวน์โหลดไฟล์ Backup สำเร็จ', 'success');
            closeExportModal();
        }

        function copyExportCode() {
            const code = $('#exportCodeData').val();
            copyToClipboard(code);
            closeExportModal();
        }

        // ==========================================
        // ระบบ RESTORE / IMPORT (File & Code)
        // ==========================================

        function openImportModal() {
            $('#importCodeData').val('');
            $('#importModal').removeClass('hidden');
        }

        function closeImportModal() {
            $('#importModal').addClass('hidden');
        }

        function triggerImport() { 
            document.getElementById('importFile').click(); 
        }

        function importDataFromFile(input) { 
            const f = input.files[0]; if(!f) return; const r = new FileReader();
            r.onload = (e) => { 
                try { 
                    const j = JSON.parse(e.target.result);
                    showConfirm('ยืนยันการ Import ข้อมูล?', 'fa-file-import', 'amber').then(ok => {
                        if(!ok) { $(input).val(''); return; }
                        if(j.orders) { 
                            orders = j.orders; 
                            banners = j.banners || banners; 
                            if(j.advertisements) {
                                advertisements = j.advertisements;
                                localStorage.setItem('gameBoosterAds', JSON.stringify(advertisements));
                            }
                            if(j.totalCredits !== undefined) {
                                TOTAL_CREDITS = parseFloat(j.totalCredits) || TOTAL_CREDITS;
                                localStorage.setItem('gameBoosterTotalCredits', TOTAL_CREDITS);
                                updateCreditDisplay(TOTAL_CREDITS);
                            }
                            if(j.creditLinks) {
                                CREDIT_LINKS = j.creditLinks;
                                localStorage.setItem('gameBoosterCreditLinks', JSON.stringify(CREDIT_LINKS));
                            }
                            if(j.staminaSoundSettings) {
                                staminaSoundSettings = j.staminaSoundSettings;
                                localStorage.setItem('staminaSoundSettings', JSON.stringify(staminaSoundSettings));
                                refreshStaminaModalFields();
                            }
                            if(j.emailSettings) {
                                emailSettings = j.emailSettings;
                                localStorage.setItem('gameBoosterEmailSettings', JSON.stringify(emailSettings));
                            }
                            if(typeof refreshStaminaModalFields === 'function') refreshStaminaModalFields();
                        } else {
                            orders = j;
                        }
                        saveData(); initApp(); showToast('Import ข้อมูลสำเร็จ', 'success');
                        closeImportModal();
                    });
                } catch(err){ showToast('ไฟล์ JSON ไม่ถูกต้อง', 'error'); }
                $(input).val('');
            }; 
            r.readAsText(f); 
        }

        function importDataFromCode() {
            const code = $('#importCodeData').val().trim();
            if(!code) return showToast('กรุณาวางโค้ดก่อนนำเข้า', 'error');
            processImportJSON(code);
        }

        // ฟังก์ชันกลางสำหรับจัดการ Data ไม่ว่าจะมาจาก File หรือ Code
        function processImportJSON(jsonString) {
            try { 
                const j = JSON.parse(jsonString);
                showConfirm('ข้อมูลปัจจุบันจะถูกทับ ยืนยันการ Import ข้อมูล?', 'fa-file-import', 'sky').then(ok => {
                    if(!ok) return;
                    
                    if(j.orders) { 
                        orders = j.orders; 
                        banners = j.banners || banners; 
                        if(j.advertisements) {
                            advertisements = j.advertisements;
                            localStorage.setItem('gameBoosterAds', JSON.stringify(advertisements));
                        }
                        if(j.totalCredits !== undefined) {
                            TOTAL_CREDITS = parseFloat(j.totalCredits) || TOTAL_CREDITS;
                            localStorage.setItem('gameBoosterTotalCredits', TOTAL_CREDITS);
                            updateCreditDisplay(TOTAL_CREDITS);
                        }
                        if(j.creditLinks) {
                            CREDIT_LINKS = j.creditLinks;
                            localStorage.setItem('gameBoosterCreditLinks', JSON.stringify(CREDIT_LINKS));
                        }
                        if(j.staminaSoundSettings) {
                            staminaSoundSettings = j.staminaSoundSettings;
                            localStorage.setItem('staminaSoundSettings', JSON.stringify(staminaSoundSettings));
                        }
                        if(j.emailSettings) {
                            emailSettings = j.emailSettings;
                            localStorage.setItem('gameBoosterEmailSettings', JSON.stringify(emailSettings));
                        }
                        if(typeof refreshStaminaModalFields === 'function') refreshStaminaModalFields();
                    } else {
                        // รองรับไฟล์เวอร์ชั่นเก่าที่มีแค่ Array ของ Orders
                        orders = j;
                    }
                    
                    saveData(); 
                    initApp(); 
                    showToast('Import ข้อมูลสำเร็จ', 'success');
                    closeImportModal();
                });
            } catch(err) { 
                console.error("Import Error:", err);
                showToast('รูปแบบข้อมูล JSON ไม่ถูกต้อง', 'error'); 
            }
        }
        function showToast(msg, type = 'success') { 
            clearTimeout(toastTimeout); $('#toastMessage').text(msg);
            
            if(type === 'error') {
                $('#toast').find('.border-gaming-success').removeClass('border-gaming-success').addClass('border-rose-500');
                $('#toastIcon').attr('class', 'fa-solid fa-circle-xmark text-rose-500 text-lg');
            } else {
                $('#toast').find('.border-rose-500').removeClass('border-rose-500').addClass('border-gaming-success');
                $('#toastIcon').attr('class', 'fa-solid fa-circle-check text-gaming-success text-lg');
            }

            $('#toast').removeClass('translate-y-24 opacity-0').addClass('translate-y-0 opacity-100');
            toastTimeout = setTimeout(()=>{ $('#toast').removeClass('translate-y-0 opacity-100').addClass('translate-y-24 opacity-0'); }, 3000);
        }

        function toggleAllMonths(source) {
            $('.month-cb').prop('checked', source.checked);
        }

        function renderDashboard() {
            let filtered = getFilteredOrders(); 
            
            const totalRevenue = filtered.filter(o => o.status !== 'canceled' && o.rank !== 'super_vvip').reduce((s,o)=> s + (parseFloat(o.price)||0), 0);
            const totalOrders = filtered.length;
            const totalDays = filtered.reduce((s,o)=>{
                if(o.rank === 'super_vvip') return s;
                const sD = new Date(o.startDate); const eD = new Date(o.endDate || o.startDate);
                const days = Math.max(0, Math.floor((eD.setHours(0,0,0,0) - new Date(sD).setHours(0,0,0,0))/86400000) + 1);
                return s + days;
            }, 0);

            $('#dash-totalRevenue').text('฿' + totalRevenue.toLocaleString());
            $('#dash-totalOrders').text(totalOrders);
            $('#dash-totalDays').text(totalDays);

            const months = {};
            filtered.forEach(o => {
                if(!o.startDate || o.rank === 'super_vvip') return;
                const d = new Date(o.startDate); const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
                if(!months[key]) months[key] = { rev:0, cnt:0 };
                months[key].rev += parseFloat(o.price)||0; months[key].cnt += 1;
            });
            
            const tbody = $('#dash-monthly'); tbody.empty();
            $('#checkAllMonths').prop('checked', false);

            Object.keys(months).sort().reverse().forEach(k=>{
                const d = new Date(k + '-01'); const label = d.toLocaleString('th-TH', { year: 'numeric', month: 'short' });
                
                const isFiltered = currentFilteredMonth === k;
                const trClass = isFiltered ? 'bg-indigo-50/50 dark:bg-indigo-900/20' : '';
                const textClass = isFiltered ? 'text-gaming-accent font-bold' : '';

                tbody.append(`
                <tr class="border-t border-gray-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition group ${trClass}">
                    <td class="py-2.5 pl-2"><input type="checkbox" class="month-cb accent-gaming-accent cursor-pointer rounded" value="${k}"></td>
                    <td class="py-2.5 font-medium cursor-pointer ${textClass}" onclick="filterByMonth('${k}')" title="คลิกเพื่อกรอง/ยกเลิกการกรองเดือนนี้">${label} ${isFiltered ? '<i class="fa-solid fa-filter ml-1 text-xs"></i>' : ''}</td>
                    <td class="py-2.5 text-right text-emerald-500 font-bold">฿${months[k].rev.toLocaleString()}</td>
                    <td class="py-2.5 text-right font-medium">${months[k].cnt}</td>
                    <td class="py-2.5 text-right">
                        <button onclick="exportMonth('${k}')" class="text-slate-400 hover:text-emerald-500 transition px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded opacity-0 group-hover:opacity-100 shadow-sm" title="ดาวน์โหลดเฉพาะเดือนนี้">
                            <i class="fa-solid fa-download"></i>
                        </button>
                    </td>
                </tr>`);
            });
            buildChart(filtered);
        }

        function filterByMonth(yearMonth) {
            const fpStart = document.querySelector('#filterStartDate')._flatpickr;
            const fpEnd = document.querySelector('#filterEndDate')._flatpickr;

            if (currentFilteredMonth === yearMonth) {
                fpStart.clear();
                fpEnd.clear();
                currentFilteredMonth = null;
                if(quickTimeSelect) quickTimeSelect.setValue('');
                renderOrders();
                renderDashboard();
                showToast(`ยกเลิกตัวกรองเดือนแล้ว`, 'success');
                return;
            }

            const [year, month] = yearMonth.split('-');
            const start = new Date(year, month - 1, 1);
            const end = new Date(year, month, 0); 

            fpStart.setDate(start);
            fpEnd.setDate(end);
            currentFilteredMonth = yearMonth; 

            if(quickTimeSelect) quickTimeSelect.setValue(''); 
            renderOrders();
            renderDashboard();
            
            const ordersSection = document.getElementById('ordersSection');
            if (ordersSection) {
                ordersSection.scrollIntoView({behavior: 'smooth'});
            }
            showToast(`แสดงข้อมูลของ ${yearMonth} แล้ว`, 'success');
        }

        function buildChart(list) {
            let labels = [], data = [];
            if(list.length !== 0) {
                const map = {};
                list.forEach(o => {
                    if(!o.startDate || o.rank === 'super_vvip') return;
                    const d = new Date(o.startDate); const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
                    map[key] = (map[key] || 0) + (parseFloat(o.price)||0);
                });
                labels = Object.keys(map).sort(); data = labels.map(k => map[k] || 0);
            }
            const displayLabels = labels.map(l => { const d = new Date(l + '-01'); return d.toLocaleDateString('th-TH', { year:'numeric', month:'short' }); });
            const ctx = document.getElementById('revenueChart').getContext('2d');
            const isDark = document.documentElement.classList.contains('dark');
            const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
            const tickColor = isDark ? '#94a3b8' : '#64748b';

            if(dashboardChart) { 
                dashboardChart.data.labels = displayLabels; 
                dashboardChart.data.datasets.data = data; 
                dashboardChart.options.scales.x.ticks.color = tickColor; 
                dashboardChart.options.scales.x.grid.color = gridColor;
                dashboardChart.options.scales.y.ticks.color = tickColor; 
                dashboardChart.options.scales.y.grid.color = gridColor;
                dashboardChart.update(); 
            } 
            else {
                dashboardChart = new Chart(ctx, {
                    type: 'line',
                    data: { 
                        labels: displayLabels, 
                        datasets: [{ 
                            label: 'รายได้ (฿)', 
                            data: data, 
                            backgroundColor: 'rgba(139, 92, 246, 0.15)',
                            borderColor: '#8b5cf6',
                            borderWidth: 2,
                            fill: true,
                            tension: 0.3,
                            pointBackgroundColor: '#8b5cf6'
                        }] 
                    },
                    options: { 
                        responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, 
                        scales: { 
                            x: { grid: { display: true, color: gridColor }, ticks: { color: tickColor, font: { family: 'Kanit' } } }, 
                            y: { grid: { display: true, color: gridColor }, ticks: { color: tickColor, font: { family: 'Kanit' } } } 
                        } 
                    }
                });
            }
        }

        function toggleDashboard() {
            dashboardVisible = !dashboardVisible;
            if(dashboardVisible) $('#dashboardSection').slideDown(); else $('#dashboardSection').slideUp();
            localStorage.setItem('dashboardVisible', dashboardVisible ? 'true' : 'false'); updateDashboardToggleText();
        }
        function updateDashboardToggleText() { $('#toggleDashboardBtn').html(dashboardVisible ? '<i class="fa-solid fa-eye-slash"></i> <span>ซ่อน</span>' : '<i class="fa-solid fa-eye"></i> <span>แสดง Dashboard</span>'); }

        function saveOrder() {
            const id = $('#orderId').val(); const gameVal = gameSelectModal ? gameSelectModal.getValue() : '';
            const gameName = gameVal === 'new_game' ? $('#customGameInput').val() : gameVal;
            const customerName = $('#customerName').val(); const username = $('#username').val(); const password = $('#password').val(); const price = parseFloat($('#price').val()) || 0;
            const rank = $('input[name="rank"]:checked').val() || 'none';
            const status = rank === 'super_vvip' ? 'active' : (statusSelectModal ? statusSelectModal.getValue() : 'pending');
            const notes = $('#adminNotes').val(); 
            
            const startDateStr = $('#startDate').val();
            const endDateStr = $('#endDate').val();
            const staminaDurationInput = $('#staminaDuration').val().trim();
            const staminaDurationMinutes = parseStaminaDuration(staminaDurationInput);
            const staminaStartInput = $('#staminaStart').val().trim();
            let staminaStart = null;
            if (staminaStartInput) {
                const parsed = parseStaminaStart(staminaStartInput);
                if (parsed) {
                    staminaStart = parsed.toISOString();
                } else {
                    return alert('รูปแบบเวลาเริ่ม Stamina ไม่ถูกต้อง ตัวอย่าง 22/5/2569 02:09:28');
                }
            }
            if (staminaDurationMinutes > 0 && !staminaStart) {
                staminaStart = new Date().toISOString();
            }
            const staminaAlertEnabled = $('#staminaAlertEnabled').is(':checked');

            if (!gameName || !customerName) return alert('กรุณากรอกชื่อเกม และ ชื่อลูกค้า');
            if (rank !== 'super_vvip' && (!startDateStr || !endDateStr)) return alert('กรุณาระบุวันที่เริ่มและสิ้นสุด');

            const contacts = []; $('.contact-row').each(function() { const type = $(this).find('select[name="contactType[]"]').val(); const value = $(this).find('input[name="contactValue[]"]').val(); if(value) contacts.push({ type, value }); });
            const tasks = []; $('#taskListContainer input[name="tasks[]"]').each(function() { const val = $(this).val(); const done = $(this).closest('div').data('done') === true; if(val) tasks.push({ text: val, done: done }); });
            const existingOrder = id ? orders.find(o => o.id === id) : null;
            const newOrder = {
                id: id || ('ord-' + Date.now()),
                gameName,
                customerName,
                username,
                password,
                price,
                status,
                rank,
                notes,
                startDate: startDateStr || null,
                endDate: endDateStr || null,
                contacts,
                tasks,
                staminaDurationInput,
                staminaDurationMinutes,
                staminaStart,
                staminaAlertEnabled,
                staminaAlerted: existingOrder ? existingOrder.staminaAlerted : false
            };

            if (newOrder.staminaDurationMinutes > 0 && newOrder.staminaStart && existingOrder && existingOrder.staminaStart !== newOrder.staminaStart) {
                newOrder.staminaAlerted = false;
            }

            if (id) { const idx = orders.findIndex(o => o.id === id); if(idx !== -1) orders[idx] = newOrder; } else { orders.unshift(newOrder); }

            saveData(); closeModal(); renderOrders(); renderDashboard(); showToast('บันทึกข้อมูลเรียบร้อย', 'success');
        }

        function uncheckAllTasks(orderId) {
            const order = orders.find(o => o.id === orderId);
            if(!order || !order.tasks || order.tasks.length === 0) return;
            order.tasks.forEach(task => task.done = false);
            saveData();
            renderSingleOrderTasks(orderId);
            showToast('ยกเลิกเครื่องหมายงานทั้งหมดแล้ว', 'success');
        }

        function checkAllTasks(orderId) {
            const order = orders.find(o => o.id === orderId);
            if(!order || !order.tasks || order.tasks.length === 0) return;
            order.tasks.forEach(task => task.done = true);
            saveData();
            renderSingleOrderTasks(orderId);
            showToast('อัพเดทเครื่องหมายงานทั้งหมดแล้ว', 'success');
        }

        function toggleTask(orderId, taskIndex, checkbox) {
            const order = orders.find(o => o.id === orderId);
            
            if(order && order.tasks && order.tasks[taskIndex]) {
                const isDone = checkbox.checked; 
                order.tasks[taskIndex].done = isDone; 
                saveData(); 
                
                const listItem = $(checkbox).closest('li'); 
                const textSpan = listItem.find('.task-text');
                
                if(isDone) { 
                    textSpan
                        .addClass('text-slate-400 line-through')
                        .removeClass('text-slate-700 dark:text-slate-200 font-medium'); 
                } else { 
                    textSpan
                        .removeClass('text-slate-400 line-through')
                        .addClass('text-slate-700 dark:text-slate-200 font-medium')
                        .css('text-decoration', ''); // Safety net: clears any inline styles 
                        
                    // Safety net 2: Ensure the parent li didn't accidentally get the class from "Update All"
                    listItem.removeClass('line-through'); 
                }
                
                const totalTasks = order.tasks.length; 
                const completed = order.tasks.filter(t => t.done).length;
                const progress = totalTasks === 0 ? 0 : Math.round((completed / totalTasks) * 100);
                
                $(`#progress-${orderId}`).css('width', `${progress}%`);
            }
        }

        function exportDataToCSV(orderList, filename) {
            if(orderList.length === 0) return showToast('ไม่มีข้อมูลในเดือนที่เลือก', 'error');
            let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; 
            csvContent += "ID,Game,Customer,StartDate,EndDate,Price,Status,Rank,Progress\n";
            let totalRev = 0;
            orderList.forEach(o => {
                const completed = o.tasks ? o.tasks.filter(t => t.done).length : 0; 
                const total = o.tasks ? o.tasks.length : 0; 
                const progress = total === 0 ? "0%" : Math.round((completed/total)*100) + "%";
                if(o.status !== 'canceled' && o.rank !== 'super_vvip') { totalRev += (parseFloat(o.price) || 0); }
                const row = [ o.id, `"${o.gameName}"`, `"${o.customerName}"`, o.startDate || '-', o.endDate || '-', o.price, o.status, o.rank || 'none', progress ].join(",");
                csvContent += row + "\r\n";
            });
            csvContent += `\n,,,Total Revenue,,${totalRev},,`;
            
            const encodedUri = encodeURI(csvContent); 
            const link = document.createElement("a"); 
            link.setAttribute("href", encodedUri); 
            link.setAttribute("download", filename); 
            document.body.appendChild(link); link.click(); document.body.removeChild(link);
            showToast('เริ่มดาวน์โหลดไฟล์ Report แล้ว', 'success');
        }

        function exportSummaryFiltered() {
            const visibleOrders = getFilteredOrders();
            exportDataToCSV(visibleOrders, 'filtered_report.csv');
        }

        function exportFullSummary() {
            exportDataToCSV(orders, 'full_report.csv');
        }

        function exportMonth(yearMonth) {
            const monthlyOrders = orders.filter(o => o.startDate && o.startDate.startsWith(yearMonth));
            exportDataToCSV(monthlyOrders, `monthly_report_${yearMonth}.csv`);
        }

        function exportSelectedMonths() {
            const selected = [];
            $('.month-cb:checked').each(function() { selected.push($(this).val()); });
            if(selected.length === 0) return showToast('กรุณาติ๊กเลือกอย่างน้อย 1 เดือน', 'error');

            const multiMonthOrders = orders.filter(o => {
                if (!o.startDate) return false;
                const ym = o.startDate.substring(0, 7); 
                return selected.includes(ym);
            });
            exportDataToCSV(multiMonthOrders, `multi_month_report_${Date.now()}.csv`);
        }

        // function exportData() {

        //     const now = new Date();
        //     const year = now.getFullYear();
        //     const month = String(now.getMonth() + 1).padStart(2, '0');
        //     const date = String(now.getDate()).padStart(2, '0');
        //     const hours = String(now.getHours()).padStart(2, '0');
        //     const minutes = String(now.getMinutes()).padStart(2, '0');
        //     const seconds = String(now.getSeconds()).padStart(2, '0');
        //     // const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({orders, banners, advertisements, totalCredits: TOTAL_CREDITS, creditLinks: CREDIT_LINKS}));
        //     const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({orders, banners, advertisements, totalCredits: TOTAL_CREDITS, creditLinks: CREDIT_LINKS, staminaSoundSettings, emailSettings}));
        //     const a = document.createElement('a'); a.setAttribute("href", dataStr); a.setAttribute("download", `game_booster_backup_${year}${month}${date}${hours}${minutes}${seconds}.json`); document.body.appendChild(a); a.click(); a.remove();
        //     showToast('ดาวน์โหลดไฟล์ Backup สำเร็จ', 'success');
        // }

        function triggerImport() { document.getElementById('importFile').click(); }
        function copyToClipboard(text) { if(!text) return; navigator.clipboard.writeText(text).then(() => { showToast('คัดลอกข้อความแล้ว!', 'success'); }, (err) => { console.error('Could not copy', err); }); }

        function resetFilters() {
            $('#searchInput').val(''); $('#filterStartDate').val(''); $('#filterEndDate').val('');
            currentFilteredMonth = null; 
            if(gameFilter) gameFilter.clear(); if(statusFilter) statusFilter.setValue('all');
            if(quickTimeSelect) quickTimeSelect.setValue('');
            document.getElementById('sortOrder').value = 'newest';
            renderOrders(); renderDashboard();
        }

        function smartMask(text, isPassword) {
            if (!text) return '-'; if (isPassword) return '•'.repeat(Math.min(text.length, 10));
            if (text.length <= 4) return text; return text.substring(0, 2) + '***' + text.substring(text.length - 2);
        }

        function formatDate(dateStr) {
            if (!dateStr) return '-'; const date = new Date(dateStr); return date.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
        }

        function toggleTheme() {
            $('html').toggleClass('dark'); const isDark = $('html').hasClass('dark'); localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if(dashboardChart) { dashboardChart.destroy(); dashboardChart = null; renderDashboard(); }
        }

        function initTheme() {
            const theme = localStorage.getItem('theme'); if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) { $('html').addClass('dark'); } else { $('html').removeClass('dark'); }
        }

        function populateGameData() {}

        function initTomSelects() {
            const sortedGames = [...GAME_LIST].sort();
            gameFilter = new TomSelect("#filterGame", { plugins: ['remove_button'], maxItems: null, create: false, sortField: { field: "text", direction: "asc" }, options: sortedGames.map(g => ({value: g, text: g})), placeholder: "เลือกเกม (ถ้าไม่เลือก = ทั้งหมด)", dropdownParent: 'body' });
            gameFilter.on('change', () => { renderOrders(); renderDashboard(); });

            statusFilter = new TomSelect("#filterStatus", { create: false, dropdownParent: 'body' });
            statusFilter.on('change', () => { renderOrders(); renderDashboard(); });

            new TomSelect("#sortOrder", { create: false, dropdownParent: 'body' });
            quickTimeSelect = new TomSelect("#quickTimeFilter", { create: false, dropdownParent: 'body' });

            const modalOptions = [ ...sortedGames.map(g => ({value: g, text: g})), {value: 'new_game', text: '+ เพิ่มเกมใหม่ (ระบุเอง)'} ];
            gameSelectModal = new TomSelect("#gameSelect", { create: false, options: modalOptions, sortField: false, onChange: function(val) { if(val === 'new_game') { $('#customGameInput').removeClass('hidden').focus(); } else { $('#customGameInput').addClass('hidden'); } } });

            statusSelectModal = new TomSelect("#status", { create: false, render: { option: function(data, escape) { return '<div>' + escape(data.text) + '</div>'; }, item: function(data, escape) { return '<div>' + escape(data.text) + '</div>'; } } });

            new TomSelect("#staminaSoundType", { create: false, dropdownParent: 'body' });

            window.contactSelectConfig = { create: false, render: { option: function(data, escape) { const contactType = CONTACT_TYPES.find(c => c.value === data.value); const icon = contactType?.icon || 'fa-solid fa-link'; const color = contactType?.color || 'text-slate-500'; return `<div><i class="${icon} ${color} mr-2"></i>${escape(data.text)}</div>`; }, item: function(data, escape) { const contactType = CONTACT_TYPES.find(c => c.value === data.value); const icon = contactType?.icon || 'fa-solid fa-link'; const color = contactType?.color || 'text-slate-500'; return `<div><i class="${icon} ${color} mr-2"></i>${escape(data.text)}</div>`; } } };
        }

        function setupSearch() { $('#searchInput').on('input', function() { renderOrders(); renderDashboard(); }); }

        function setupFlatpickr() {
            flatpickr("#startDate", { locale: "th", dateFormat: "Y-m-d" }); flatpickr("#endDate", { locale: "th", dateFormat: "Y-m-d" });
            flatpickr("#staminaStart", { locale: "th", enableTime: true, enableSeconds: true, time_24hr: true, dateFormat: "d/m/Y H:i:S", allowInput: true });
            flatpickr("#filterStartDate", { locale: "th", dateFormat: "Y-m-d", onChange: function() { currentFilteredMonth = null; renderOrders(); renderDashboard(); } });
            flatpickr("#filterEndDate", { locale: "th", dateFormat: "Y-m-d", onChange: function() { currentFilteredMonth = null; renderOrders(); renderDashboard(); } });
        }
        function updateCreditDisplay(rawValue) {
            const numberElement = document.getElementById('credit-number');
            const displayElement = document.getElementById('credit-display');
            const formattedNum = Intl.NumberFormat('en-US', {
                notation: "compact",
                maximumFractionDigits: 1, 
                roundingMode: "trunc"    
            }).format(rawValue);
            numberElement.innerText = formattedNum;
            displayElement.classList.remove('text-xl', 'text-2xl', 'text-3xl');
            const textLength = formattedNum.length;
            if (textLength >= 6) {
                displayElement.classList.add('text-xl');
            } else if (textLength >= 4) {
                displayElement.classList.add('text-2xl');
            } else {
                displayElement.classList.add('text-3xl');
            }
        }
        function cancelStamina(id) {
            showConfirm('ต้องการยกเลิกการจับเวลา Stamina ของรายการนี้ใช่หรือไม่?', 'fa-bolt-slash', 'rose').then(ok => {
                if(!ok) return;
                
                const idx = orders.findIndex(o => o.id === id);
                if(idx !== -1) {
                    // เคลียร์ค่า Stamina ทั้งหมดให้เป็นค่าว่าง
                    orders[idx].staminaDurationInput = '';
                    orders[idx].staminaDurationMinutes = 0;
                    orders[idx].staminaStart = null;
                    orders[idx].staminaAlerted = false;
                    
                    saveData();
                    renderOrders(); 
                    showToast('ยกเลิก Stamina เรียบร้อย', 'success');
                }
            });
        }
        // ฟังก์ชันสำหรับเปิด/ปิด Blur ช่อง Textarea
        function toggleBlur(elementId, btn, activeColorClass = 'text-gaming-accent') {
            const el = document.getElementById(elementId);
            if (!el) return;
            
            const isBlurred = el.classList.contains('blur-sm');
            const icon = btn.querySelector('i');
            const span = btn.querySelector('span');
            
            if (isBlurred) {
                // เอาเบลอออก
                el.classList.remove('blur-sm');
                if (el.hasAttribute('readonly')) el.classList.remove('select-none'); // เอา select-none ออกเฉพาะช่องอ่านอย่างเดียว
                
                if (icon) icon.className = `fa-solid fa-eye-slash ${activeColorClass}`;
                if (span) { span.innerText = 'ซ่อนโค้ด'; span.classList.add(activeColorClass); }
            } else {
                // ใส่เบลอกลับเข้าไป
                el.classList.add('blur-sm');
                if (el.hasAttribute('readonly')) el.classList.add('select-none'); 
                
                if (icon) icon.className = 'fa-solid fa-eye text-slate-500';
                if (span) { span.innerText = 'แสดงโค้ด'; span.classList.remove(activeColorClass); }
            }
        }
        function toggleMobileSidebar(open) {
            const sidebar = document.getElementById('mobileSidebar');
            const overlay = document.getElementById('mobileSidebarOverlay');
            
            if (open) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        updateCreditDisplay(TOTAL_CREDITS); 
