import os
import shutil
import subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def make_video():
    # 1. Configs
    width, height = 1920, 1080
    fps = 30
    duration_per_slide = 3.5  # seconds
    fade_duration = 0.8  # seconds
    
    frames_per_slide = int(duration_per_slide * fps)
    frames_fade = int(fade_duration * fps)
    
    img_dir = "/Users/dalong/AntigravityCodeSpace/foreign-trade/www.takinbot.com/public/img"
    output_dir = "/Users/dalong/AntigravityCodeSpace/foreign-trade/www.takinbot.com/public/video"
    temp_dir = os.path.join(output_dir, "temp_frames")
    
    os.makedirs(output_dir, exist_ok=True)
    if os.path.exists(temp_dir):
        shutil.rmtree(temp_dir)
    os.makedirs(temp_dir, exist_ok=True)
    
    # 2. Font configuration (macOS standard)
    font_title_path = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
    font_zh_path = "/System/Library/Fonts/PingFang.ttc"
    
    # Fallbacks
    if not os.path.exists(font_title_path):
        font_title_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
    if not os.path.exists(font_zh_path):
        font_zh_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
        
    try:
        font_brand = ImageFont.truetype(font_title_path, 32)
        font_title = ImageFont.truetype(font_title_path, 58)
        font_tagline = ImageFont.truetype(font_zh_path, 30)
        font_bullet = ImageFont.truetype(font_zh_path, 24)
        font_watermark = ImageFont.truetype(font_title_path, 20)
    except Exception as e:
        print(f"Error loading fonts: {e}. Falling back to default.")
        font_brand = font_title = font_tagline = font_bullet = font_watermark = ImageFont.load_default()

    # 3. Slide definitions
    slides_data = [
        {
            "img": "filter_oil.png",
            "brand": "takinbot • 出海试点示范",
            "title": "PREMIUM B2B FILTRATION",
            "tagline": "大厂全栈自研技术 · 扎根车间制造",
            "bullets": [
                "✔ IATF 16949 汽车质量体系标准车间高精生产",
                "✔ 选用高规格固化滤纸，确保极致过滤效率与工作寿命",
                "✔ 阀门与旁通阀严密配合，防油气外溢，锁死耐磨性能"
            ]
        },
        {
            "img": "packaging_oil_filter.png",
            "brand": "takinbot • 品牌包装彩盒设计",
            "title": "CUSTOM B2B BRANDING",
            "tagline": "高拟真三维彩盒彩印 · 树立品牌护城河",
            "bullets": [
                "✔ 协助工厂进行 3D 外包装彩盒定制与矢量结构设计",
                "✔ 拒绝传统代销地摊感，以高档极简设计获取海外溢价",
                "✔ 一手贴牌与品牌授权体系搭建，打入欧美主流供应链"
            ]
        },
        {
            "img": "packaging_cabin_filter.png",
            "brand": "takinbot • 独立站数字化展厅",
            "title": "DIGITAL SHOWROOM",
            "tagline": "6,000+ SKU 车辆数据交叉检索 · 极速独立站",
            "bullets": [
                "✔ 支持海量 OEM 交叉对照码，海外买家秒级定位产品",
                "✔ 媲美 Apple 官网极简高质感设计，建立一流大厂信誉",
                "✔ 内置 FOB 阶梯离岸询价系统，直接捕获海外决策人"
            ]
        },
        {
            "img": "packaging_master_carton.png",
            "brand": "takinbot • 重工大货专用包装",
            "title": "HEAVY-DUTY CARTONS",
            "tagline": "高强加厚箱体 · 保证海运发货万无一失",
            "bullets": [
                "✔ 出港专用五层高强牛皮瓦楞卡箱，抗压防跌落破损",
                "✔ 自主设计英文标识与封箱标签，传递极致大厂体验",
                "✔ 集装箱整箱/拼箱科学摆盘排布，实现运费效能最大化"
            ]
        },
        {
            "img": "scene_oil_packing.png",
            "brand": "takinbot • 专属“海外营销事业部”",
            "title": "YOUR EXPORT DEPARTMENT",
            "tagline": "合伙人大龙英语跟进 · 长期同盟共赢",
            "bullets": [
                "✔ 技术合伙人大龙流利商务英语直接沟通，无信息损耗",
                "✔ 上海港拖车、报关、商检拼箱一站式跑通，离岸无忧",
                "✔ 品类独占保障：每个行业仅服务一家工厂，拒绝内卷"
            ]
        }
    ]

    # 4. Generate master slide frames
    slide_images = []
    for idx, data in enumerate(slides_data):
        # Base canvas (dark industrial slate background)
        base = Image.new("RGBA", (width, height), (11, 15, 25, 255)) # #0B0F19
        draw = ImageDraw.Draw(base)
        
        # Draw soft glowing radial overlays
        # Radial orange glow on left
        glow_l = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        draw_gl = ImageDraw.Draw(glow_l)
        draw_gl.ellipse([-400, -200, 800, 1000], fill=(255, 107, 0, 12)) # 5% opacity takinbot-orange glow
        glow_l = glow_l.filter(ImageFilter.GaussianBlur(150))
        base = Image.alpha_composite(base, glow_l)
        
        # Radial cyan glow on right
        glow_r = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        draw_gr = ImageDraw.Draw(glow_r)
        draw_gr.ellipse([1100, 300, 2300, 1300], fill=(0, 242, 254, 8)) # 3% opacity takinbot-cyan glow
        glow_r = glow_r.filter(ImageFilter.GaussianBlur(150))
        base = Image.alpha_composite(base, glow_r)
        
        # Re-get draw context for standard drawing
        draw = ImageDraw.Draw(base)
        
        # Load and paste product/packaging image on left
        img_path = os.path.join(img_dir, data["img"])
        if os.path.exists(img_path):
            prod_img = Image.open(img_path).convert("RGBA")
            # Aspect-ratio scaling to max 720x720
            prod_img.thumbnail((720, 720), Image.Resampling.LANCZOS)
            w_p, h_p = prod_img.size
            # Draw an elegant rounded box behind it
            box_x0 = 80
            box_y0 = (height - 760) // 2
            box_x1 = box_x0 + 760
            box_y1 = box_y0 + 760
            draw.rounded_rectangle([box_x0, box_y0, box_x1, box_y1], radius=24, fill=(18, 24, 38, 160), outline=(255, 107, 0, 45), width=2)
            
            # Paste product image centered in the box
            p_x = box_x0 + (760 - w_p) // 2
            p_y = box_y0 + (760 - h_p) // 2
            base.paste(prod_img, (p_x, p_y), prod_img)
        else:
            print(f"Warning: Image {img_path} not found.")

        # Draw B2B Tech Typography on right
        text_x = 940
        
        # Brand Tag
        draw.text((text_x, 150), data["brand"], fill=(255, 107, 0, 230), font=font_brand)
        
        # Main Title (English bold B2B)
        draw.text((text_x, 230), data["title"], fill=(255, 255, 255, 255), font=font_title)
        
        # Chinese Tagline
        draw.text((text_x, 320), data["tagline"], fill=(0, 242, 254, 230), font=font_tagline)
        
        # Thick technical divider line
        draw.line([text_x, 395, text_x + 880, 395], fill=(255, 255, 255, 30), width=3)
        
        # Bullet points
        bullet_start_y = 445
        for b_idx, bullet in enumerate(data["bullets"]):
            b_y = bullet_start_y + b_idx * 75
            # Draw a subtle background strip for the bullet
            draw.rounded_rectangle([text_x, b_y - 12, text_x + 880, b_y + 42], radius=12, fill=(18, 24, 38, 100), outline=(255, 255, 255, 8), width=1)
            # Render bullet text
            draw.text((text_x + 25, b_y), bullet, fill=(230, 235, 245, 255), font=font_bullet)
            
        # Watermark in the corner
        draw.text((width - 430, height - 70), "takinbot • YOUR GOING-GLOBAL PARTNER", fill=(255, 255, 255, 40), font=font_watermark)
        
        slide_images.append(base.convert("RGB"))
        print(f"Master slide {idx + 1} generated successfully.")

    # 5. Compile frame by frame with cross-fade interpolation (silky smooth)
    frame_counter = 0
    num_slides = len(slide_images)
    
    for idx in range(num_slides):
        current_slide = slide_images[idx]
        next_slide = slide_images[(idx + 1) % num_slides]
        
        # 5.1 Static frames for this slide
        for _ in range(frames_per_slide):
            frame_path = os.path.join(temp_dir, f"frame_{frame_counter:04d}.png")
            current_slide.save(frame_path, "PNG")
            frame_counter += 1
            
        # 5.2 Transition frames (fade to next slide)
        # Avoid fading out of the last slide if you don't want a loop, but a loop video is great!
        for f in range(frames_fade):
            alpha = f / float(frames_fade)
            # Linear pixel blending
            blended = Image.blend(current_slide, next_slide, alpha)
            frame_path = os.path.join(temp_dir, f"frame_{frame_counter:04d}.png")
            blended.save(frame_path, "PNG")
            frame_counter += 1
            
    print(f"All {frame_counter} frames written to temporary directory. Starting FFMPEG...")

    # 6. Call FFMPEG to compile the PNG frames into a gorgeous 1080p, 60fps MP4 video
    output_video_path = os.path.join(output_dir, "dalong_product_intro.mp4")
    if os.path.exists(output_video_path):
        os.remove(output_video_path)
        
    ffmpeg_cmd = [
        "/opt/homebrew/bin/ffmpeg",
        "-y",
        "-r", str(fps),
        "-i", os.path.join(temp_dir, "frame_%04d.png"),
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-preset", "slow",
        "-crf", "18",
        output_video_path
    ]
    
    try:
        subprocess.run(ffmpeg_cmd, check=True)
        print(f"\nSUCCESS! High-quality B2B product showcase video created successfully at: {output_video_path}")
    except Exception as e:
        print(f"FFMPEG compilation failed: {e}")
        
    # 7. Clean up temporary frame folder
    try:
        shutil.rmtree(temp_dir)
        print("Temporary frames successfully cleaned up.")
    except Exception as e:
        print(f"Error cleaning up temporary files: {e}")

if __name__ == "__main__":
    make_video()
